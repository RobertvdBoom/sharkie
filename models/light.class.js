class Light extends MovableObject {
    width = 500;
    y = 0;
    constructor(imagePath, x) {
        super().loadImage(imagePath);
        this.x = x;
    }
}