vec4 frag(vec2 pos, vec2 uv, vec4 cc, sampler2D tex) {
  vec4 color = texture2D(tex, uv);
  float gray = dot(color.rgb, vec3(0.299, 0.587, 0.114));
  return vec4(gray, gray, gray, color.a);
}