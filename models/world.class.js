class World {
    character = new Character();
    enemies = [
        new JellyFish(),
        new JellyFish(),
        new JellyFish(),
    ];
    lights = [
        new Light("assets/imgs/3. Background/Layers/1. Light/1.png", -100),
        new Light("assets/imgs/3. Background/Layers/1. Light/2.png", 400),
    ];

    backgroundObjects = [
        new BackgroundObject("assets/imgs/3. Background/Layers/5. Water/D1.png", 0),
        new BackgroundObject("assets/imgs/3. Background/Layers/5. Water/D2.png", 720),

        new BackgroundObject("assets/imgs/3. Background/Layers/4.Fondo 2/D1.png", 0),
        new BackgroundObject("assets/imgs/3. Background/Layers/4.Fondo 2/D2.png", 720),

        new BackgroundObject("assets/imgs/3. Background/Layers/3.Fondo 1/D1.png", 0),
        new BackgroundObject("assets/imgs/3. Background/Layers/3.Fondo 1/D2.png", 720),



        new BackgroundObject("assets/imgs/3. Background/Layers/2. Floor/D1.png", 0),
        new BackgroundObject("assets/imgs/3. Background/Layers/2. Floor/D2.png", 720),


        // new BackgroundObject("assets/imgs/3. Background/Layers/2. Floor/D.png", 0),
    ];

    canvas;
    ctx;
    keyboard;
    camera_x = 0;

    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext("2d");
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
    }

    setWorld() {
        this.character.world = this;
    }

    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.ctx.translate(this.camera_x, 0);

        this.addObjectsToMap(this.backgroundObjects);
        this.addObjectsToMap(this.lights);
        this.addObjectsToMap(this.enemies);

        this.addToMap(this.character);

        this.ctx.translate(-this.camera_x, 0);


        let self = this;
        requestAnimationFrame(function () {
            self.draw();
        });
    }

    addObjectsToMap(obj) {
        obj.forEach(o => {
            this.addToMap(o);
        });
    }

    addToMap(movableObject) {
        if (movableObject.otherDirection) {
            this.ctx.save();
            this.ctx.translate(movableObject.width, 0);
            this.ctx.scale(-1, 1);
            movableObject.x = movableObject.x*-1;
        }
        
        this.ctx.drawImage(movableObject.img, movableObject.x, movableObject.y, movableObject.width, movableObject.height);

        if (movableObject.otherDirection) {
            movableObject.x = movableObject.x*-1;
            this.ctx.restore();
        }
    }

}