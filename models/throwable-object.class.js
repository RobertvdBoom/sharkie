class ThrowableObject extends MovableObject {


    IMAGES_POISON = [
        "assets/imgs/4. Marcadores/Posión/Animada/1.png",
        "assets/imgs/4. Marcadores/Posión/Animada/2.png",
        "assets/imgs/4. Marcadores/Posión/Animada/3.png",
        "assets/imgs/4. Marcadores/Posión/Animada/4.png",
        "assets/imgs/4. Marcadores/Posión/Animada/5.png",
        "assets/imgs/4. Marcadores/Posión/Animada/6.png",
        "assets/imgs/4. Marcadores/Posión/Animada/7.png",
        "assets/imgs/4. Marcadores/Posión/Animada/8.png",
    ]


    constructor(x, y) {
        super();
        this.x = x +100;
        this.y = y +100;
        this.loadImage("assets/imgs/4. Marcadores/Posión/Dark - Right.png");
        this.loadImages(this.IMAGES_POISON);
        this.width = 50;
        this.height = 68;
        this.throw(x, y)
    }


    throw() {
        this.speedY = 20;
        this.applyGravity();
        setInterval(() => {
            this.x += 10;
        }, 1000 / 60)

        setInterval(() => {
            this.playAnimation(this.IMAGES_POISON);
        }, 130)
    }
}