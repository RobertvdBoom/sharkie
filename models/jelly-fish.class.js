class JellyFish extends MovableObject {
    constructor() {
        super().loadImage("assets/imgs/2.Enemy/2 Jelly fish/Regular damage/Yellow 1.png");
        this.x = 200 + Math.random() * 500;
        this.y = 350;
        this.height = 100;
        this.width = 80;
    }
}