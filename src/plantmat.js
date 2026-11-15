import * as THREE from 'three';

// Shared uniforms for every plant (wind + day light)
export const windU = { uTime: { value: 0 }, uWind: { value: 1 }, uDay: { value: 1 } };

const nfb = THREE.ShaderChunk.normal_fragment_begin.replace('normal *= faceDirection;', 'normal *= mix(faceDirection, 1.0, vFix);');

export function makePlantMaterial(opts = {}) {
  const m = new THREE.MeshStandardMaterial({ vertexColors: true, side: THREE.DoubleSide, roughness: opts.roughness ?? 0.62, metalness: 0 });
  m.userData.u = { uSway: { value: opts.sway ?? 0.5 }, uDroop: { value: 0 }, uGlow: { value: opts.glow ?? 0.1 }, uPhase: { value: opts.phase ?? 0 } };
  m.onBeforeCompile = (sh) => {
    Object.assign(sh.uniforms, windU, m.userData.u);
    sh.vertexShader = sh.vertexShader
      .replace('#include <common>', `#include <common>
        uniform float uTime, uWind, uSway, uDroop, uPhase; attribute float aFix; varying float vFix;`)
      .replace('#include <begin_vertex>', `#include <begin_vertex>
        vFix = aFix;
        {
          vec4 wp0 = modelMatrix * vec4(0.0, 0.0, 0.0, 1.0);
          float h = abs(transformed.y);
          float w = h * (0.35 + h) * uSway * uWind * 0.06;
          float ph = wp0.x * 0.7 + wp0.z * 0.55 + uPhase + transformed.x * 1.5 + transformed.z * 1.1;
          float gust = 0.6 + 0.4 * sin(uTime * 0.31 + wp0.x * 0.15 + wp0.z * 0.11);
          transformed.x += (sin(uTime * 1.35 + ph) + 0.35 * sin(uTime * 3.1 + ph * 2.3)) * w * gust;
          transformed.z += (cos(uTime * 1.1 + ph * 1.3) + 0.3 * sin(uTime * 2.7 + ph * 1.7)) * w * 0.8 * gust;
          transformed.y -= uDroop * h * 0.2;
          transformed.xz *= 1.0 + uDroop * min(h, 1.0) * 0.28;
        }`);
    sh.fragmentShader = sh.fragmentShader
      .replace('#include <common>', `#include <common>
        uniform float uGlow, uDroop, uDay; varying float vFix;`)
      .replace('#include <normal_fragment_begin>', nfb)
      .replace('#include <color_fragment>', `#include <color_fragment>
        {
          float l = dot(diffuseColor.rgb, vec3(0.3, 0.55, 0.15));
          diffuseColor.rgb = mix(diffuseColor.rgb, vec3(l * 1.05, l * 0.95, l * 0.62), uDroop * 0.55);
        }`)
      .replace('#include <emissivemap_fragment>', `#include <emissivemap_fragment>
        totalEmissiveRadiance += diffuseColor.rgb * uGlow * (0.25 + 0.75 * uDay);`);
  };
  m.customProgramCacheKey = () => 'plant-v1';
  return m;
}
