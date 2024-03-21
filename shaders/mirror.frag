vec4 frag(vec2 pos, vec2 uv, vec4 cc, sampler2D tex) {
  // Create a mirrored version of the texture
  uv.x = 1.0 - uv.x;
  vec4 color = texture2D(tex, uv);
  return color;
}