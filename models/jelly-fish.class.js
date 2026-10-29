class JellyFish extends MovableObject {
    height = 80;
    width = 65;
    y = 320;
    constructor() {
        super().loadImage("assets/imgs/2.Enemy/2 Jelly fish/Regular damage/Yellow 1.png");
        this.x = 200 + Math.random() * 500;
    }
}