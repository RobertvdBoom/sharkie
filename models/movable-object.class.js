class MovableObject {
    x;
    y;
    img;
    width = 150;
    height = 100;


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