class World {
    character = new Character();
    enemies = [
        new JellyFish(),
        new JellyFish(),
        new JellyFish(),
    ];
    lights = [
        new Light(),
    ];

    backgroundObjects = [
        new BackgroundObject("assets/imgs/3. Background/Dark/1.png")
    ]

    canvas;
    ctx;

    constructor(canvas) {
        this.ctx = canvas.getContext("2d");
        this.canvas = canvas;
        this.draw();
    }

    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.enemies.forEach(enemy => {
            this.addToMap(enemy)
            // this.ctx.drawImage(enemy.img, enemy.x, enemy.y, enemy.width, enemy.height);
            // enemy.x--;
        });

        this.lights.forEach(light => {
            this.addToMap(light)
            // this.ctx.drawImage(light.img, light.x, light.y, light.width, light.height);
            // light.x--;
        });

        this.addToMap(this.character);
        // this.ctx.drawImage(this.character.img, this.character.x, this.character.y, this.character.width, this.character.height);

        let self = this;
        requestAnimationFrame(function () {
            self.draw();
        });


    }

    addToMap(movableObject) {
        this.ctx.drawImage(movableObject.img, movableObject.x, movableObject.y, movableObject.width, movableObject.height);
    }

}