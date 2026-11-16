class StatusBar extends DrawableObject {
    IMAGES_HEALTH = [
        "assets/imgs/4. Marcadores/orange/0_health.png",
        "assets/imgs/4. Marcadores/orange/20_health.png",
        "assets/imgs/4. Marcadores/orange/40_health.png",
        "assets/imgs/4. Marcadores/orange/60_health.png",
        "assets/imgs/4. Marcadores/orange/80_health.png",
        "assets/imgs/4. Marcadores/orange/100_health.png",
    ];

    IMAGES_COINS = [
        "assets/imgs/4. Marcadores/orange/0_coin.png",
        "assets/imgs/4. Marcadores/orange/20_coin.png",
        "assets/imgs/4. Marcadores/orange/40_coin.png",
        "assets/imgs/4. Marcadores/orange/60_coin.png",
        "assets/imgs/4. Marcadores/orange/80_coin.png",
        "assets/imgs/4. Marcadores/orange/100_coin.png",
    ];

    IMAGES_POISON = [
        "assets/imgs/4. Marcadores/orange/0_poison.png",
        "assets/imgs/4. Marcadores/orange/20_poison.png",
        "assets/imgs/4. Marcadores/orange/40_poison.png",
        "assets/imgs/4. Marcadores/orange/60_poison.png",
        "assets/imgs/4. Marcadores/orange/80_poison.png",
        "assets/imgs/4. Marcadores/orange/100_poison.png",
    ];

    x = 10;
    y = 0;
    width = 200;
    height = 53;
    
    statusBarTypes = {
        health: {
            images: this.IMAGES_HEALTH,
            startingValue: 100,
            positionY: 0,
        },
        coin: {
            images: this.IMAGES_COINS,
            startingValue: 0,
            positionY: 43,
        },
        poison: {
            images: this.IMAGES_POISON,
            startingValue: 0,
            positionY: 87,
        },
    };
    statusBarRef;


    percentage = 100;

    constructor(barType) {
        super();
        this.statusBarRef = this.statusBarTypes[barType];
        this.loadImages(this.statusBarRef.images);
        this.y = this.statusBarRef.positionY;      
        this.setPercentage(this.statusBarRef.startingValue);

    }

    setPercentage(percentage) {
        this.percentage = percentage;
        
        const path = this.statusBarRef.images[this.resolveImageIndex()];

        this.img = this.imageCache[path];
    }

    resolveImageIndex() {
        if (this.percentage == 100) {
            return 5;
        } else if (this.percentage > 80) {
            return 4;
        } else if (this.percentage > 60) {
            return 3;
        } else if (this.percentage > 40) {
            return 2;
        } else if (this.percentage > 20) {
            return 1;
        } else {
            return 0;
        }
    }
}