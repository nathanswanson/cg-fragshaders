#version 300 es

precision mediump float;

in vec2 texcoord;

uniform sampler2D image;

out vec4 FragColor;

void main() {
    vec4 color = texture(image, texcoord);
    float luminance = color.x * 0.299 + color.y * 0.587 + color.z * 0.114;
    
    FragColor = vec4(luminance,luminance,luminance,1.0);
}
