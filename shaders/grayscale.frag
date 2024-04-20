uniform float intensity;
uniform vec3 colorModifiers = vec3(1.0, 1.0, 1.0);

vec4 frag(vec2 pos, vec2 uv, vec4 cc, sampler2D tex) {
  vec4 color = texture2D(tex, uv);
  float gray = dot(color.rgb, vec3(0.299, 0.587, 0.114) * colorModifiers);
  return vec4(vec3(gray * intensity), color.a);
}