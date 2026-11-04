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
}