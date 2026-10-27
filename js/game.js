let canvas;
let world;

function init() {
    canvas = document.getElementById("game-canvas");
    world = new World(canvas);
    console.log("My Character is", world.character);

    document.addEventListener("keydown", function (event) {
        handleInput(event);
    });

}

function handleInput(event) {
    if (event.key === "ArrowLeft") {
        world.character.moveLeft();
    } else if (event.key === "ArrowRight") {
        world.character.moveRight();
    }
}