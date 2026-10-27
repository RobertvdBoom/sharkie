class Character extends MovableObject {

    constructor() {
        super().loadImage("assets/imgs/1.Sharkie/1.IDLE/1.png");
    }

    swimUp() {
        if (this.y >= -100) {
            this.y -= 10;
        }
    }

    swimDown() {
        if (this.y <= 280) {
            this.y += 10;
        }
    }

    moveRight() {
        if (this.x <= 550) {
            this.x += 10;
        }
    }

    moveLeft() {
        if (this.x >= -30) {
            this.x -= 10;
        }
    }
}