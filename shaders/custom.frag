#version 300 es

precision mediump float;

in vec2 texcoord;

uniform float width;
uniform float height;
uniform sampler2D image;

out vec4 FragColor;

const float PIXEL_LEVEL = 128.0;

void main() {
    float ratio = 1.0 / PIXEL_LEVEL;
    float x = floor(texcoord.x / ratio) * ratio;
    float y = floor(texcoord.y / ratio) * ratio;
    FragColor = texture(image, vec2(x,y));
}
