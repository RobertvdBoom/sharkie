class Endboss extends MovableObject {

    height = 500;
    width = 428;
    y = -50;

    IMAGES_INTRO = [
        "assets/imgs/2.Enemy/3 Final Enemy/1.Introduce/1.png",
        "assets/imgs/2.Enemy/3 Final Enemy/1.Introduce/2.png",
        "assets/imgs/2.Enemy/3 Final Enemy/1.Introduce/3.png",
        "assets/imgs/2.Enemy/3 Final Enemy/1.Introduce/4.png",
        "assets/imgs/2.Enemy/3 Final Enemy/1.Introduce/5.png",
        "assets/imgs/2.Enemy/3 Final Enemy/1.Introduce/6.png",
        "assets/imgs/2.Enemy/3 Final Enemy/1.Introduce/7.png",
        "assets/imgs/2.Enemy/3 Final Enemy/1.Introduce/8.png",
        "assets/imgs/2.Enemy/3 Final Enemy/1.Introduce/9.png",
        "assets/imgs/2.Enemy/3 Final Enemy/1.Introduce/10.png",

    ];

    IMAGES_WALKING = [
        "assets/imgs/2.Enemy/3 Final Enemy/2.floating/1.png",
        "assets/imgs/2.Enemy/3 Final Enemy/2.floating/2.png",
        "assets/imgs/2.Enemy/3 Final Enemy/2.floating/3.png",
        "assets/imgs/2.Enemy/3 Final Enemy/2.floating/4.png",
        "assets/imgs/2.Enemy/3 Final Enemy/2.floating/5.png",
        "assets/imgs/2.Enemy/3 Final Enemy/2.floating/6.png",
        "assets/imgs/2.Enemy/3 Final Enemy/2.floating/7.png",
        "assets/imgs/2.Enemy/3 Final Enemy/2.floating/8.png",
        "assets/imgs/2.Enemy/3 Final Enemy/2.floating/9.png",
        "assets/imgs/2.Enemy/3 Final Enemy/2.floating/10.png",
        "assets/imgs/2.Enemy/3 Final Enemy/2.floating/11.png",
        "assets/imgs/2.Enemy/3 Final Enemy/2.floating/12.png",
        "assets/imgs/2.Enemy/3 Final Enemy/2.floating/13.png",
    ];

    IMAGES_ATTACK = [
        "assets/imgs/2.Enemy/3 Final Enemy/Attack/1.png",
        "assets/imgs/2.Enemy/3 Final Enemy/Attack/2.png",
        "assets/imgs/2.Enemy/3 Final Enemy/Attack/3.png",
        "assets/imgs/2.Enemy/3 Final Enemy/Attack/4.png",
        "assets/imgs/2.Enemy/3 Final Enemy/Attack/5.png",
        "assets/imgs/2.Enemy/3 Final Enemy/Attack/6.png",
    ];

    IMAGES_HURT = [
        "assets/imgs/2.Enemy/3 Final Enemy/Hurt/1.png",
        "assets/imgs/2.Enemy/3 Final Enemy/Hurt/2.png",
        "assets/imgs/2.Enemy/3 Final Enemy/Hurt/3.png",
        "assets/imgs/2.Enemy/3 Final Enemy/Hurt/4.png",
    ];

    IMAGES_DEATH = [
        "assets/imgs/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2 copia 6.png",
        "assets/imgs/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2 copia 7.png",
        "assets/imgs/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2 copia 8.png",
        "assets/imgs/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2 copia 9.png",
        "assets/imgs/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2 copia 10.png",
    ];

    constructor() {
        super();
        this.loadImage(this.IMAGES_WALKING[0]);
        this.x = 800;
        this.loadImages(this.IMAGES_WALKING);
        this.animate();
    }

    animate() {
        // this.moveLeft();
        setInterval(() => {
            this.playAnimation(this.IMAGES_WALKING);
        }, 1000 / 4)
    }
}