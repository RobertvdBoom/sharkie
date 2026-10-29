class Character extends MovableObject {

    height = 276;
    width = 225;

    IMAGES_IDLE = [
        "assets/imgs/1.Sharkie/1.IDLE/1.png",
        "assets/imgs/1.Sharkie/1.IDLE/2.png",
        "assets/imgs/1.Sharkie/1.IDLE/3.png",
        "assets/imgs/1.Sharkie/1.IDLE/4.png",
        "assets/imgs/1.Sharkie/1.IDLE/5.png",
        "assets/imgs/1.Sharkie/1.IDLE/6.png",
        "assets/imgs/1.Sharkie/1.IDLE/7.png",
        "assets/imgs/1.Sharkie/1.IDLE/8.png",
        "assets/imgs/1.Sharkie/1.IDLE/9.png",
        "assets/imgs/1.Sharkie/1.IDLE/10.png",
        "assets/imgs/1.Sharkie/1.IDLE/11.png",
        "assets/imgs/1.Sharkie/1.IDLE/12.png",
        "assets/imgs/1.Sharkie/1.IDLE/13.png",
        "assets/imgs/1.Sharkie/1.IDLE/14.png",
        "assets/imgs/1.Sharkie/1.IDLE/15.png",
        "assets/imgs/1.Sharkie/1.IDLE/16.png",
        "assets/imgs/1.Sharkie/1.IDLE/17.png",
        "assets/imgs/1.Sharkie/1.IDLE/18.png",
    ];
    constructor() {
        super().loadImage("assets/imgs/1.Sharkie/1.IDLE/1.png");
        this.loadImages(this.IMAGES_IDLE);

        this.animate();
    }

    animate() {

        setInterval(() => {
            let i = this.currentImage % this.IMAGES_IDLE.length;
            let path = this.IMAGES_IDLE[i];
            this.img = this.imageCache[path];
            this.currentImage++;
        }, 1000 / 5)

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