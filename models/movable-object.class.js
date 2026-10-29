class MovableObject {
    x = 50;
    y = 170;
    img;
    width = 250;
    height = 300;


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