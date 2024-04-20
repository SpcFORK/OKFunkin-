uniform float intensity;
uniform float redModifier = 1.0;
uniform float greenModifier = 1.0;
uniform float blueModifier = 1.0;

vec4 frag(vec2 pos, vec2 uv, vec4 cc, sampler2D tex) {
  vec4 color = texture2D(tex, uv);
  float gray = dot(color.rgb, vec3(0.299 * redModifier, 0.587 * greenModifier, 0.114 * blueModifier));
  return vec4(gray * intensity, gray * intensity, gray * intensity, color.a);
}