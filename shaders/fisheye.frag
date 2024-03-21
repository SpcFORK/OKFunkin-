uniform float u_strength; // Strength of the fisheye effect
uniform float u_radius; // Radius of the effect

vec4 frag(vec2 pos, vec2 uv, vec4 cc, sampler2D tex) {
  vec2 coords = uv * 2.0 - 1.0; // Normalize coordinates to -1..1
  float len = length(coords);
  if (len < u_radius) {
    float radian = atan(coords.y, coords.x);
    float newLen = pow(len / u_radius, u_strength) * u_radius;
    coords.x = cos(radian) * newLen;
    coords.y = sin(radian) * newLen;
  }
  coords = (coords + 1.0) / 2.0; // Convert back to 0..1 UV coordinates
  return texture2D(tex, coords);
}