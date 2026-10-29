class Light extends MovableObject {
    width = 500;
    y = 0;
    constructor(imagePath, x) {
        super().loadImage(imagePath);
        this.x = x;

        this.animate();
    }

    animate() {

        setInterval(() => {
            this.x -= 2;
            if (this.x === -500) {
                this.x = 720;
            }
        }, 1000 / 60)
    }
}