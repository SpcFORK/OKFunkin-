uniform vec4 u_solidColor;
uniform float u_fade;

vec4 frag(vec2 pos, vec2 uv, vec4 cc, sampler2D tex) {
    return vec4(u_solidColor.rgb, u_solidColor.a * u_fade);
}