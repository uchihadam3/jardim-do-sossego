import * as THREE from 'three';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass.js';
import { OutputPass } from 'three/examples/jsm/postprocessing/OutputPass.js';

export const QUALITY = {
  alta: { dpr: 2, shadows: 2048, grass: 1, post: true, blur: true },
  media: { dpr: 1.5, shadows: 1536, grass: 0.65, post: true, blur: false },
  baixa: { dpr: 1, shadows: 1024, grass: 0.35, post: false, blur: false },
};

const FinalShader = {
  uniforms: { tDiffuse: { value: null }, uRes: { value: new THREE.Vector2(1, 1) }, uBlur: { value: 1 }, uFocus: { value: 0.52 }, uWarm: { value: 0.0 } },
  vertexShader: 'varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }',
  fragmentShader: `uniform sampler2D tDiffuse; uniform vec2 uRes; uniform float uBlur, uFocus, uWarm; varying vec2 vUv;
    void main(){
      float d = abs(vUv.y - uFocus); float amt = smoothstep(0.24, 0.6, d) * uBlur;
      vec3 c = texture2D(tDiffuse, vUv).rgb;
      if (amt > 0.01) {
        vec3 acc = c; float wsum = 1.0; vec2 px = amt * 0.0034 * vec2(uRes.y / uRes.x, 1.0);
        for (int i = 0; i < 12; i++) { float a = float(i) * 2.39996; float r = sqrt((float(i) + 0.5) / 12.0); acc += texture2D(tDiffuse, vUv + vec2(cos(a), sin(a)) * r * px).rgb; wsum += 1.0; }
        c = acc / wsum;
      }
      vec2 q = vUv - 0.5; float v = smoothstep(0.95, 0.25, length(q * vec2(1.05, 1.2)));
      c *= mix(0.8, 1.0, v);
      float l = dot(c, vec3(0.299, 0.587, 0.114));
      c = mix(vec3(l), c, 1.1);                         // gentle saturation
      c += vec3(0.022, 0.008, -0.012) * (1.0 - l);      // warm shadows
      gl_FragColor = vec4(c, 1.0);
    }`,
};

export function createRenderer(canvas, q) {
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, powerPreference: 'high-performance', preserveDrawingBuffer: false });
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.shadowMap.enabled = q.shadows > 0; renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  const R = { renderer, composer: null, q };
  let bloom, final;
  R.setup = (scene, camera) => {
    const rt = new THREE.WebGLRenderTarget(4, 4, { samples: 4, type: THREE.HalfFloatType });
    const c = new EffectComposer(renderer, rt);
    R.pass = new RenderPass(scene, camera); c.addPass(R.pass);
    bloom = new UnrealBloomPass(new THREE.Vector2(256, 256), 0.22, 0.7, 0.92); c.addPass(bloom);
    c.addPass(new OutputPass());
    final = new ShaderPass(FinalShader); final.uniforms.uBlur.value = R.q.blur ? 1 : 0; c.addPass(final);
    R.composer = c; R.final = final; R.bloom = bloom;
  };
  R.resize = (w, h) => {
    R.w = w; R.h = h; const dpr = Math.min(window.devicePixelRatio || 1, R.q.dpr);
    renderer.setPixelRatio(dpr); renderer.setSize(w, h, false);
    if (R.composer) { R.composer.setPixelRatio(dpr); R.composer.setSize(w, h); final.uniforms.uRes.value.set(w * dpr, h * dpr); }
  };
  R.render = (scene, camera) => { if (R.composer && R.q.post) { R.pass.scene = scene; R.composer.render(); } else renderer.render(scene, camera); };
  R.setQuality = (nq) => { R.q = nq; if (final) final.uniforms.uBlur.value = nq.blur ? 1 : 0; R.resize(R.w, R.h); };
  return R;
}
