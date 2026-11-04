class JellyFish extends MovableObject {
    height = 80;
    width = 65;
    x = 500;
    y = 320;
    invertMovement = false;

    currentImage = 0;
    IMAGES_IDLE = [
        "assets/imgs/2.Enemy/2 Jelly fish/Regular damage/Yellow 1.png",
        "assets/imgs/2.Enemy/2 Jelly fish/Regular damage/Yellow 2.png",
        "assets/imgs/2.Enemy/2 Jelly fish/Regular damage/Yellow 3.png",
        "assets/imgs/2.Enemy/2 Jelly fish/Regular damage/Yellow 4.png"
    ];

    constructor() {
        super().loadImage("assets/imgs/2.Enemy/2 Jelly fish/Regular damage/Yellow 1.png");
        this.x = 200 + Math.random() * 600;
        this.speed = 0.3 + Math.random() * 0.5;
        this.loadImages(this.IMAGES_IDLE);
        this.animate();
        this.invertMovement = false;
        // this.applyGravity();
    }

    animate() {
        setInterval(() => {
            this.moveLeft();
        }, 1000 / 60);

        setInterval(() => {
            this.playAnimation(this.IMAGES_IDLE);
        }, 230);

        setInterval(() => {
            this.jellyFishRandomMovement();
        }, 1000 / 60);

    }

    jellyFishRandomMovement() {
        if (Math.floor(Math.random() * 300) + 1 === 25) {
            this.invertMovement = !this.invertMovement;
        }
        if (this.y === 50) {
            this.invertMovement = true;
        }
        if (this.y === 320) {
            this.invertMovement = false;
        }

        if (this.invertMovement === true) {
            this.y += 0.5;

        } else if (this.invertMovement === false) {
            this.y -= 0.5;
        }
    }
}