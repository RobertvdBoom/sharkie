class GameController {

    world;
    oldTimestamp = null;
    frameId = null;
    gameState = "start";

    constructor(world) {
        this.world = world;
    }

    start() {
        this.gameState = "running";
        setInterval(() => {
            requestAnimationFrame((timestamp) => {
                this.gameLoop(timestamp);
            });
        }, 1000 / 60)
    }

    stop() {
        cancelAnimationFrame(this.frameId);
        this.oldTimestamp = null;
        this.world.menu();
    }

    // pause() {

    // }

    // resume() {

    // }

    // restart() {

    // }

    gameLoop(timestamp) {
        if (this.oldTimestamp === null) {
            this.oldTimestamp = timestamp;
        }
        let deltaTime = (timestamp - this.oldTimestamp) / 1000;
        this.oldTimestamp = timestamp;
        this.world.update(deltaTime);


        this.frameId = requestAnimationFrame((timestamp) => {
            this.gameLoop(timestamp);
        });
    }
}