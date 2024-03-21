uniform float u_gamma;

vec4 frag(vec2 pos, vec2 uv, vec4 cc, sampler2D tex) {
  vec4 color = texture2D(tex, uv);
  color.rgb = pow(color.rgb, vec3(1.0 / u_gamma));
  return color;
}