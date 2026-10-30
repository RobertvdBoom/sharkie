class JellyFish extends MovableObject {
    height = 80;
    width = 65;
    y = 320;

    currentImage = 0;
    IMAGES_IDLE = [
        "assets/imgs/2.Enemy/2 Jelly fish/Regular damage/Yellow 1.png",
        "assets/imgs/2.Enemy/2 Jelly fish/Regular damage/Yellow 2.png",
        "assets/imgs/2.Enemy/2 Jelly fish/Regular damage/Yellow 3.png",
        "assets/imgs/2.Enemy/2 Jelly fish/Regular damage/Yellow 4.png"
    ];

    constructor() {
        super().loadImage("assets/imgs/2.Enemy/2 Jelly fish/Regular damage/Yellow 1.png");
        this.x = 200 + Math.random() * 500;
        this.speed = 0.3 + Math.random() * 0.5;
        this.loadImages(this.IMAGES_IDLE);
        this.animate();
    }

    animate() {
        this.moveLeft();
        setInterval(() => {
            let i = this.currentImage % this.IMAGES_IDLE.length;
            let path = this.IMAGES_IDLE[i];
            this.img = this.imageCache[path];
            this.currentImage++;
        }, 230)

    }
}