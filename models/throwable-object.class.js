class ThrowableObject extends MovableObject {


    constructor(x, y) {
        super();
        this.x = x;
        this.y = y;
        this.loadImage("assets/imgs/4. Marcadores/Posión/Dark - Right.png");
        this.width = 50;
        this.height = 68;
        this.throw(x, y)
    }

    throw() {
        this.speedY = 20;
        this.applyGravity();
        setInterval(() => {
            this.x += 5;
        }, 1000 / 60)
    }
}