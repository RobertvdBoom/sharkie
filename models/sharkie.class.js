class Shark {
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

class Coins {
    value;
    size;

    constructor () {
        this.value = Math.floor(Math.random() * 10) + 1;
        this.size = Math.floor(Math.random() * 10) + 1;
    }

    printValues() {
        console.log(`${this.width}` + " " + `${this.height}`)
    }
}