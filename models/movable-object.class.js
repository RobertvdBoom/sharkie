class MovableObject {
    x = 50;
    y = 170;
    img;
    width = 250;
    height = 300;
    currentImage = 0;
    speed = 0.15;
    imageCache = {};
    otherDirection = false;
    speedY = 0;
    acceleration = 1.3;
    energy = 100;

    offset = {
        top: 0,
        bottom: 0,
        left: 0,
        right: 0
    };


    draw(ctx) {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }

    drawFrame(ctx) {
        if (this instanceof Character || this instanceof JellyFish || this instanceof Endboss) {
            ctx.beginPath();
            ctx.lineWidth = "5";
            ctx.strokeStyle = 'blue';
            ctx.rect(this.x, this.y, this.width, this.height);
            ctx.stroke();
        }
    }

    receiveDMG() {
        this.energy -= 5;
        if (this.energy < 0) {
            this.energy = 0;
        }
    }

    isDead() {
        return this.energy == 0;
    }

    applyGravity() { // use for throwing pots?
        setInterval(() => {
            if (this.isAboveGround() || this.speedY > 0) {
                this.y -= this.speedY;
                this.speedY -= this.acceleration;
            }

        }, 1000 / 30)
    }

    isAboveGround() {
        return this.y < 170;
    }

    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }

    loadImages(arr) {
        arr.forEach(path => {
            let img = new Image();
            img.src = path;
            this.imageCache[path] = img;
        });
    }

    moveRight() {
        this.x += this.speed;
    }

    moveLeft() {
        this.x -= this.speed;
    }

    playAnimation(imageList) {
        let i = this.currentImage % imageList.length;
        let path = imageList[i];
        this.img = this.imageCache[path];
        this.currentImage++;
    }

    jump() {
        this.speedY = 15;
    }

    isColliding(movableObject) {
        return this.x + this.width - this.offset.right > movableObject.x + movableObject.offset.left && // Checks this right side with movable object left side
            this.y + this.height - this.offset.bottom > movableObject.y + movableObject.offset.top && // Checks this 
            this.x + this.offset.left < movableObject.x + movableObject.width - movableObject.offset.right && // Checks 
            this.y + this.offset.top < movableObject.y + movableObject.height - movableObject.offset.bottom; // Checks 
    }

    drawHitbox(ctx) {
        if (this instanceof Character) {
            ctx.beginPath();
            ctx.lineWidth = "5";
            ctx.strokeStyle = 'red';
            ctx.rect(
                this.x + this.offset.left,
                this.y + this.offset.top,
                this.width - this.offset.right,
                this.height - this.offset.bottom);
            ctx.stroke();
        }
    }

}