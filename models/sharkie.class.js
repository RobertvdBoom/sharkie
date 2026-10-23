class Coins {
    width;
    height;

    constructor (width, height) {
        this.height = height;
        this.width = width;
        console.log("SHARK ATTACK")
    }

    printValues() {
        console.log(`${this.width}` + " " + `${this.height}`)
    }
}