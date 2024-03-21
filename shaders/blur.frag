uniform float u_radius;

vec4 frag(vec2 pos, vec2 uv, vec4 cc, sampler2D tex) {
  // Apply a simple blur effect with adjustable radius
  float radius = u_radius;
  vec4 sum = vec4(0.0);
  int samples = 9; // Number of samples for averaging
  float offset = 2.0 * radius / float(samples - 1);
  for(int i = 0; i < samples; ++i) {
    for(int j = 0; j < samples; ++j) {
      float x = -radius + float(i) * offset;
      float y = -radius + float(j) * offset;
      sum += texture2D(tex, uv + vec2(x, y));
    }
  }
  return sum / float(samples * samples);
}