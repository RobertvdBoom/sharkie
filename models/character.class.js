class Character extends MovableObject {
    
    constructor() {
        super().loadImage("assets/imgs/1.Sharkie/1.IDLE/1.png");
    }

    jump() {

    }

    moveRight() {
        this.x += 10;
    }

    moveLeft() {
        this.x -= 10;
    }
}