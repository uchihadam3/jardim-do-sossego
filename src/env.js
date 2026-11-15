import * as THREE from 'three';
import { clamp, lerp, mulberry, TAU } from './util.js';
import { windU } from './plantmat.js';

// keyframes by hour
const K = [
  { h: 0, top: 0x0b1330, hor: 0x27386a, sun: 0x93aaf0, si: 0.62, sky: 0x4a5c9c, gnd: 0x1e2840, hi: 0.78, fog: 0x1a2648, exp: 0.95, cloud: 0x3a4a78, night: 1 },
  { h: 4.8, top: 0x0f1838, hor: 0x33406e, sun: 0x93aaf0, si: 0.58, sky: 0x4a5c9c, gnd: 0x1e2840, hi: 0.78, fog: 0x1e2a4c, exp: 0.95, cloud: 0x3f4d78, night: 1 },
  { h: 5.9, top: 0x38487e, hor: 0xf0a07c, sun: 0xff9a66, si: 0.5, sky: 0x8088b8, gnd: 0x4a4250, hi: 0.7, fog: 0xa890a0, exp: 0.98, cloud: 0xf2a890, night: 0.3 },
  { h: 7.2, top: 0x5fa2dc, hor: 0xfcdcb4, sun: 0xffd6a0, si: 2.3, sky: 0xcfe0fb, gnd: 0x9a8868, hi: 0.95, fog: 0xecdcc4, exp: 1.0, cloud: 0xfff0e0, night: 0 },
  { h: 10, top: 0x4c98dc, hor: 0xd3e8f6, sun: 0xfff2dc, si: 2.9, sky: 0xd8e8ff, gnd: 0xa09474, hi: 1.05, fog: 0xd9e8f0, exp: 1.0, cloud: 0xffffff, night: 0 },
  { h: 14.5, top: 0x4c98dc, hor: 0xd6e8f2, sun: 0xfff0d6, si: 2.9, sky: 0xd8e8ff, gnd: 0xa09474, hi: 1.05, fog: 0xdbe8ee, exp: 1.0, cloud: 0xffffff, night: 0 },
  { h: 16.8, top: 0x5a96cf, hor: 0xf9dcae, sun: 0xffc980, si: 2.6, sky: 0xd4dcf4, gnd: 0xa88a64, hi: 0.95, fog: 0xf0dcc0, exp: 1.02, cloud: 0xffe8c8, night: 0 },
  { h: 18.1, top: 0x4a5a9c, hor: 0xf99a66, sun: 0xff8448, si: 1.7, sky: 0xa8a0cc, gnd: 0x806258, hi: 0.8, fog: 0xe8a488, exp: 1.02, cloud: 0xf8a078, night: 0.1 },
  { h: 19.0, top: 0x222e60, hor: 0xb06a88, sun: 0xc88ab0, si: 0.45, sky: 0x6068a8, gnd: 0x36304a, hi: 0.66, fog: 0x6a5a80, exp: 0.98, cloud: 0x7a5a88, night: 0.65 },
  { h: 20.0, top: 0x0e1736, hor: 0x2c3c6c, sun: 0x93aaf0, si: 0.58, sky: 0x4a5c9c, gnd: 0x1e2840, hi: 0.78, fog: 0x1c2848, exp: 0.95, cloud: 0x3a4a78, night: 1 },
  { h: 24, top: 0x0b1330, hor: 0x27386a, sun: 0x93aaf0, si: 0.62, sky: 0x4a5c9c, gnd: 0x1e2840, hi: 0.78, fog: 0x1a2648, exp: 0.95, cloud: 0x3a4a78, night: 1 },
];
for (const k of K) for (const f of ['top', 'hor', 'sun', 'sky', 'gnd', 'fog', 'cloud']) k[f] = new THREE.Color(k[f]);

function puffTexture() {
  const c = document.createElement('canvas'); c.width = c.height = 128;
  const g = c.getContext('2d');
  const gr = g.createRadialGradient(64, 64, 4, 64, 64, 62);
  gr.addColorStop(0, 'rgba(255,255,255,0.95)'); gr.addColorStop(0.45, 'rgba(255,255,255,0.6)'); gr.addColorStop(1, 'rgba(255,255,255,0)');
  g.fillStyle = gr; g.fillRect(0, 0, 128, 128);
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; return t;
}

export function createEnv(scene, renderer, q) {
  const env = { hour: 9, night: 0, sunDir: new THREE.Vector3(), cur: {} };
  const cur = { top: new THREE.Color(), hor: new THREE.Color(), sun: new THREE.Color(), sky: new THREE.Color(), gnd: new THREE.Color(), fog: new THREE.Color(), cloud: new THREE.Color() };

  // sky dome
  const skyU = { uTop: { value: new THREE.Color() }, uHor: { value: new THREE.Color() }, uSunDir: { value: new THREE.Vector3(0, 1, 0) }, uSunCol: { value: new THREE.Color() }, uNight: { value: 0 }, uTime: windU.uTime };
  const sky = new THREE.Mesh(new THREE.SphereGeometry(400, 32, 20), new THREE.ShaderMaterial({
    side: THREE.BackSide, depthWrite: false, fog: false, uniforms: skyU,
    vertexShader: `varying vec3 vDir; void main(){ vDir = normalize(position); vec4 p = modelViewMatrix * vec4(position,1.0); gl_Position = projectionMatrix * p; gl_Position.z = gl_Position.w; }`,
    fragmentShader: `uniform vec3 uTop, uHor, uSunDir, uSunCol; uniform float uNight, uTime; varying vec3 vDir;
      float hash(vec3 p){ p = fract(p * 0.3183099 + 0.1); p *= 17.0; return fract(p.x * p.y * p.z * (p.x + p.y + p.z)); }
      void main(){
        vec3 d = normalize(vDir);
        float h = clamp(d.y, -0.2, 1.0);
        vec3 c = mix(uHor, uTop, pow(smoothstep(-0.02, 0.75, h), 0.6));
        c = mix(c, uHor * 0.92, smoothstep(0.0, -0.18, h));
        float s = max(dot(d, uSunDir), 0.0);
        c += uSunCol * (pow(s, 6.0) * 0.22 + pow(s, 60.0) * 0.5 + smoothstep(0.9993, 0.9997, s) * 3.0) * (1.0 - uNight * 0.6);
        if (uNight > 0.02 && d.y > 0.0) {
          vec3 g = floor(d * 190.0); float st = hash(g);
          float tw = 0.6 + 0.4 * sin(uTime * 2.0 + st * 60.0);
          c += vec3(0.9, 0.95, 1.0) * smoothstep(0.9965, 1.0, st) * tw * uNight * smoothstep(0.0, 0.25, d.y);
        }
        gl_FragColor = vec4(c, 1.0);
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
      }`,
  }));
  sky.renderOrder = -10; sky.frustumCulled = false; scene.add(sky);

  const hemi = new THREE.HemisphereLight(0xffffff, 0x888888, 1); scene.add(hemi);
  const sun = new THREE.DirectionalLight(0xffffff, 2.5);
  sun.castShadow = q.shadows > 0;
  sun.shadow.mapSize.set(q.shadows || 512, q.shadows || 512);
  const sc = sun.shadow.camera; sc.left = -19; sc.right = 19; sc.top = 19; sc.bottom = -19; sc.near = 1; sc.far = 90;
  sun.shadow.bias = -0.0004; sun.shadow.normalBias = 0.03; sun.shadow.radius = 3;
  scene.add(sun); scene.add(sun.target);
  scene.fog = new THREE.Fog(0xffffff, 38, 230);

  // clouds
  const tex = puffTexture(), clouds = new THREE.Group(), cmat = [];
  const rng = mulberry(42);
  for (let i = 0; i < 16; i++) {
    const g = new THREE.Group(), w = rng.range(22, 46);
    const m = new THREE.SpriteMaterial({ map: tex, transparent: true, depthWrite: false, fog: false, opacity: rng.range(0.55, 0.9) }); cmat.push(m);
    for (let j = 0; j < 7; j++) { const s = new THREE.Sprite(m); const k = rng.range(0.4, 1); s.scale.set(w * k * 0.7, w * k * 0.34, 1); s.position.set(rng.range(-0.5, 0.5) * w, rng.range(-0.06, 0.1) * w, rng.range(-3, 3)); g.add(s); }
    const a = rng() * TAU, r = rng.range(120, 300);
    g.position.set(Math.cos(a) * r, rng.range(46, 110), Math.sin(a) * r); g.userData.v = rng.range(0.4, 1.1);
    clouds.add(g);
  }
  clouds.renderOrder = -5; scene.add(clouds);

  env.setHour = (hour) => {
    hour = ((hour % 24) + 24) % 24; env.hour = hour;
    let i = 0; while (i < K.length - 2 && K[i + 1].h <= hour) i++;
    const a = K[i], b = K[i + 1], t = clamp((hour - a.h) / (b.h - a.h), 0, 1);
    for (const f in cur) cur[f].copy(a[f]).lerp(b[f], t);
    const si = lerp(a.si, b.si, t), hi = lerp(a.hi, b.hi, t); env.night = lerp(a.night, b.night, t);
    // sun arc (east -> south -> west); moon takes over at night
    const isDay = hour > 5.6 && hour < 18.9;
    const p = isDay ? (hour - 5.6) / 13.3 : ((hour + 24 - 18.9) % 24) / 10.7;
    const el = Math.sin(p * Math.PI) * (isDay ? 1.0 : 0.75) + 0.16, az = lerp(-1.15, 1.15, p);
    env.sunDir.set(-Math.sin(az) * Math.cos(el), Math.sin(el), Math.cos(az) * Math.cos(el) * 0.75 + 0.12).normalize();
    sun.position.copy(env.sunDir).multiplyScalar(48).add(sun.target.position);
    sun.color.copy(cur.sun); sun.intensity = si;
    hemi.color.copy(cur.sky); hemi.groundColor.copy(cur.gnd); hemi.intensity = hi;
    scene.fog.color.copy(cur.fog);
    skyU.uTop.value.copy(cur.top); skyU.uHor.value.copy(cur.hor); skyU.uSunDir.value.copy(env.sunDir); skyU.uSunCol.value.copy(cur.sun); skyU.uNight.value = env.night;
    renderer.toneMappingExposure = lerp(a.exp, b.exp, t);
    for (const m of cmat) m.color.copy(cur.cloud);
    windU.uDay.value = 1 - env.night * 0.8;
    env.cur = cur; env.sunI = si;
  };
  env.update = (dt, camPos) => {
    sky.position.copy(camPos);
    for (const g of clouds.children) { g.position.x += g.userData.v * dt; if (g.position.x > 320) g.position.x = -320; }
  };
  env.sun = sun; env.hemi = hemi;
  env.setHour(9);
  return env;
}
