class Collectibles extends MovableObject {

    width = 50;
    height = 50;
    constructor(imagePath, x) {
        super();
        this.loadImage(imagePath);
        this.x = x;
    }

    IMAGES_COINS = [
        "assets/imgs/4. Marcadores/1. Coins/3.png", //big
        "assets/imgs/4. Marcadores/1. Coins/2.png", //medium
        "assets/imgs/4. Marcadores/1. Coins/1.png", //small
    ]

    IMAGES_POISON = [
        "assets/imgs/4. Marcadores/Posión/Animada/1.png",
        "assets/imgs/4. Marcadores/Posión/Animada/2.png",
        "assets/imgs/4. Marcadores/Posión/Animada/3.png",
        "assets/imgs/4. Marcadores/Posión/Animada/4.png",
        "assets/imgs/4. Marcadores/Posión/Animada/5.png",
        "assets/imgs/4. Marcadores/Posión/Animada/6.png",
        "assets/imgs/4. Marcadores/Posión/Animada/7.png",
        "assets/imgs/4. Marcadores/Posión/Animada/8.png",
    ]

    COIN_MAP = [

    ]
}