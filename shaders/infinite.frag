vec4 frag(vec2 pos, vec2 uv, vec4 cc, sampler2D tex) {
  // Normalize UV coordinates to repeat the texture infinitely
  uv = fract(uv);

  // Calculate distance to the nearest edge
  float distX = min(uv.x, 1.0 - uv.x);
  float distY = min(uv.y, 1.0 - uv.y);
  float edgeDist = min(distX, distY);

  // Blur edges for seamless continuation
  float blurAmount = smoothstep(0.0, 0.05, edgeDist);

  // Sample the texture
  vec4 color = texture2D(tex, uv);

  // Apply blur effect based on distance to the edge
  color.rgb *= blurAmount;

  return color;
}