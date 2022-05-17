#version 300 es

precision mediump float;

in vec2 texcoord;

uniform sampler2D image;

out vec4 FragColor;

float cartoon(float va) {
    return round((va * 4.0) / 4.0);
}

void main() {
    vec4 colorPixel = texture(image, texcoord);
    FragColor = vec4(
        cartoon(colorPixel.x),
        cartoon(colorPixel.y),
        cartoon(colorPixel.z),
        1.0
    );
}

