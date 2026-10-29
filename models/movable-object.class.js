class MovableObject {
    x = 50;
    y = 170;
    img;
    width = 250;
    height = 300;

    imageCache = {};


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
        console.log("Moving Right");
    }

    moveLeft() {

    }
}