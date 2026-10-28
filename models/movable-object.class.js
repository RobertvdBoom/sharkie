class MovableObject {
    x = 50;
    y = 180;
    img;
    width = 200;
    height = 250;


    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }

    moveRight() {
        console.log("Moving Right");
    }

    moveLeft() {

    }
}