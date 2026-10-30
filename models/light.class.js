class Light extends MovableObject {
    width = 500;
    y = 0;

    speed = 0.15;

    constructor(imagePath, x) {
        super().loadImage(imagePath);
        this.x = x;

        this.animate();
    }

    animate() {
        this.moveLeft();
    }

    moveLeft() {
        setInterval(() => {
            this.x -= this.speed;
            if (this.x === -500) {
                this.x = 720;
            }
        }, 1000 / 60)
    }
}