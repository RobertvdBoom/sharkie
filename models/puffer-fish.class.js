class PufferFish extends MovableObject {
    height = 80;
    width = 65;
    x = 800;
    y = 320;
    invertMovement = false;
    offset = {
        top: 0,
        bottom: 0,
        left: 0,
        right: 0
    };

    currentImage = 0;

    IMAGES_SWIM = [
        "assets/imgs/2.Enemy/1.Puffer fish (3 color options)/1.Swim/3.swim1.png",
        "assets/imgs/2.Enemy/1.Puffer fish (3 color options)/1.Swim/3.swim2.png",
        "assets/imgs/2.Enemy/1.Puffer fish (3 color options)/1.Swim/3.swim3.png",
        "assets/imgs/2.Enemy/1.Puffer fish (3 color options)/1.Swim/3.swim4.png",
        "assets/imgs/2.Enemy/1.Puffer fish (3 color options)/1.Swim/3.swim5.png",
    ];

    IMAGES_EXPAND = [
        "assets/imgs/2.Enemy/1.Puffer fish (3 color options)/2.transition/3.transition1.png",
        "assets/imgs/2.Enemy/1.Puffer fish (3 color options)/2.transition/3.transition2.png",
        "assets/imgs/2.Enemy/1.Puffer fish (3 color options)/2.transition/3.transition3.png",
        "assets/imgs/2.Enemy/1.Puffer fish (3 color options)/2.transition/3.transition4.png",
        "assets/imgs/2.Enemy/1.Puffer fish (3 color options)/2.transition/3.transition5.png",

    ];

    constructor() {
        super().loadImage("assets/imgs/2.Enemy/2 Jelly fish/Regular damage/Yellow 1.png");
        this.x = 200 + Math.random() * 1300;
        this.speed = 0.3 + Math.random() * 0.5;
        this.loadImages(this.IMAGES_SWIM);
        this.loadImages(this.IMAGES_EXPAND);
        this.animate();
        this.invertMovement = false;
    }

    animate() {
        setInterval(() => {
            this.moveLeft();
            this.jellyFishRandomMovement();
        }, 1000 / 60);

        setInterval(() => {
            if (!this.invertMovement) {
                this.playAnimation(this.IMAGES_SWIM);
            } else {
                this.playAnimation(this.IMAGES_EXPAND);
            }
        }, 230);

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