uniform float u_time;
uniform float u_dissolveThreshold;

vec4 frag(vec2 pos, vec2 uv, vec4 cc, sampler2D tex) {
  float noise = fract(sin(dot(uv, vec2(12.9898, 78.233))) * 43758.5453);
  float alpha = smoothstep(u_dissolveThreshold - 0.1, u_dissolveThreshold + 0.1, noise + u_time * 0.2);
  vec4 textureColor = texture2D(tex, uv);
  return vec4(textureColor.rgb, textureColor.a * alpha);
}