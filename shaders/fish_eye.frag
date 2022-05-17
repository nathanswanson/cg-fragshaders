#version 300 es

precision mediump float;

in vec2 texcoord;

uniform sampler2D image;

out vec4 FragColor;

void main() {
    vec2 scaledTexture = texcoord * 2.0 - 1.0;
    float theta = atan(scaledTexture.y, scaledTexture.x);
    float radius = pow(length(scaledTexture),1.5);
    vec2 fishEye = vec2(radius * cos(theta), radius * sin(theta));
    vec2 reScaled = 0.5 * (fishEye + 1.0);
    FragColor = texture(image, reScaled);
}
