class ThrowableObject extends MovableObject {


    constructor() {
        super();
        this.x = 100;
        this.y = 480;
        this.width = 50;
        this.height = 68;
        this.loadImage("assets/imgs/4. Marcadores/Posión/Dark - Right.png");
        this.throw(50, 100)
    }

    throw(x,y) {
        this.x = x;
        this.y = y;
        this.speedY = 0;
        this.applyGravity();
        setInterval(() => {
            this.x += 1;
        },1000 / 60)
    }
}