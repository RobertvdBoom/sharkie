class Character extends MovableObject {

    height = 276;
    width = 225;
    speed = 6;
    y = 100;

    offset = {
        top: 135,
        bottom: 200,
        left: 48,
        right: 93,
    };


    IMAGES_IDLE = [
        "assets/imgs/1.Sharkie/1.IDLE/1.png",
        "assets/imgs/1.Sharkie/1.IDLE/2.png",
        "assets/imgs/1.Sharkie/1.IDLE/3.png",
        "assets/imgs/1.Sharkie/1.IDLE/4.png",
        "assets/imgs/1.Sharkie/1.IDLE/5.png",
        "assets/imgs/1.Sharkie/1.IDLE/6.png",
        "assets/imgs/1.Sharkie/1.IDLE/7.png",
        "assets/imgs/1.Sharkie/1.IDLE/8.png",
        "assets/imgs/1.Sharkie/1.IDLE/9.png",
        "assets/imgs/1.Sharkie/1.IDLE/10.png",
        "assets/imgs/1.Sharkie/1.IDLE/11.png",
        "assets/imgs/1.Sharkie/1.IDLE/12.png",
        "assets/imgs/1.Sharkie/1.IDLE/13.png",
        "assets/imgs/1.Sharkie/1.IDLE/14.png",
        "assets/imgs/1.Sharkie/1.IDLE/15.png",
        "assets/imgs/1.Sharkie/1.IDLE/16.png",
        "assets/imgs/1.Sharkie/1.IDLE/17.png",
        "assets/imgs/1.Sharkie/1.IDLE/18.png",
    ];

    IMAGES_LONG_IDLE = [
        "assets/imgs/1.Sharkie/2.Long_IDLE/i1.png",
        "assets/imgs/1.Sharkie/2.Long_IDLE/i1.png",
        "assets/imgs/1.Sharkie/2.Long_IDLE/I2.png",
        "assets/imgs/1.Sharkie/2.Long_IDLE/I3.png",
        "assets/imgs/1.Sharkie/2.Long_IDLE/I4.png",
        "assets/imgs/1.Sharkie/2.Long_IDLE/I5.png",
        "assets/imgs/1.Sharkie/2.Long_IDLE/I6.png",
        "assets/imgs/1.Sharkie/2.Long_IDLE/I7.png",
        "assets/imgs/1.Sharkie/2.Long_IDLE/I8.png",
        "assets/imgs/1.Sharkie/2.Long_IDLE/I9.png",
        "assets/imgs/1.Sharkie/2.Long_IDLE/I10.png",
        "assets/imgs/1.Sharkie/2.Long_IDLE/I11.png",
        "assets/imgs/1.Sharkie/2.Long_IDLE/I12.png",
        "assets/imgs/1.Sharkie/2.Long_IDLE/I13.png",
        "assets/imgs/1.Sharkie/2.Long_IDLE/I14.png",
    ];

    IMAGES_MOVING = [
        "assets/imgs/1.Sharkie/3.Swim/1.png",
        "assets/imgs/1.Sharkie/3.Swim/2.png",
        "assets/imgs/1.Sharkie/3.Swim/3.png",
        "assets/imgs/1.Sharkie/3.Swim/4.png",
        "assets/imgs/1.Sharkie/3.Swim/5.png",
        "assets/imgs/1.Sharkie/3.Swim/6.png",
    ]

    IMAGES_DEAD = [
        "assets/imgs/1.Sharkie/6.dead/1.Poisoned/sin subir/DES 2_00000.png",
        "assets/imgs/1.Sharkie/6.dead/1.Poisoned/sin subir/DES 2_00001.png",
        "assets/imgs/1.Sharkie/6.dead/1.Poisoned/sin subir/DES 2_00002.png",
        "assets/imgs/1.Sharkie/6.dead/1.Poisoned/sin subir/DES 2_00003.png",
        "assets/imgs/1.Sharkie/6.dead/1.Poisoned/sin subir/DES 2_00004.png",
        "assets/imgs/1.Sharkie/6.dead/1.Poisoned/sin subir/DES 2_00005.png",
        "assets/imgs/1.Sharkie/6.dead/1.Poisoned/sin subir/DES 2_00006.png",
        "assets/imgs/1.Sharkie/6.dead/1.Poisoned/sin subir/DES 2_00007.png",
        "assets/imgs/1.Sharkie/6.dead/1.Poisoned/sin subir/DES 2_00008.png",
        "assets/imgs/1.Sharkie/6.dead/1.Poisoned/sin subir/DES 2_00009.png",
        "assets/imgs/1.Sharkie/6.dead/1.Poisoned/sin subir/DES 2_00010.png",
        "assets/imgs/1.Sharkie/6.dead/1.Poisoned/sin subir/DES 2_00011.png",
    ]

    IMAGES_POISONED = [
        "assets/imgs/1.Sharkie/5.Hurt/1.Poisoned/1.png",
        "assets/imgs/1.Sharkie/5.Hurt/1.Poisoned/2.png",
        "assets/imgs/1.Sharkie/5.Hurt/1.Poisoned/3.png",
        "assets/imgs/1.Sharkie/5.Hurt/1.Poisoned/4.png",
    ]

    IMAGES_ELECTRIFIED = [
        "assets/imgs/1.Sharkie/5.Hurt/2.Electric shock/.o1.png",
        "assets/imgs/1.Sharkie/5.Hurt/2.Electric shock/.o2.png",
    ]

    world;

    constructor() {
        super().loadImage("assets/imgs/1.Sharkie/1.IDLE/1.png");
        this.loadImages(this.IMAGES_IDLE);
        this.loadImages(this.IMAGES_MOVING);
        this.loadImages(this.IMAGES_DEAD);
        this.loadImages(this.IMAGES_POISONED);

        this.applyGravity();

        this.animate();
    }

    animate() {
        setInterval(() => {
            if (this.world.keyboard.RIGHT && this.x < this.world.level.level_end_x) {
                this.otherDirection = false;
                this.moveRight();
            }
            if (this.world.keyboard.LEFT && this.x > 0) {
                this.otherDirection = true;
                this.moveLeft();
            }

            if (this.world.keyboard.SPACE && !this.isAboveGround()) {
                this.jump();
            }
            this.world.camera_x = -this.x + 60;
        }, 1000 / 60);

        setInterval(() => {
            if (this.isDead()) {
                this.playAnimation(this.IMAGES_DEAD);
            } else if (!this.world.keyboard.RIGHT && !this.world.keyboard.LEFT && !this.world.keyboard.UP && !this.world.keyboard.DOWN && this.isDead) {
                let i = this.currentImage % this.IMAGES_IDLE.length;
                let path = this.IMAGES_IDLE[i];
                this.img = this.imageCache[path];
                this.currentImage++;
            }
        }, 1000 / 8);

        setInterval(() => {
            if (this.isDead()) {
                this.playAnimation(this.IMAGES_DEAD);
            } else if (this.isHurt()) {
                this.playAnimation(this.IMAGES_POISONED);
            } else if (this.world.keyboard.RIGHT || this.world.keyboard.LEFT) {
                this.playAnimation(this.IMAGES_MOVING);
            }
        }, 1000 / 8);

    }
 
    swimUp() {
        if (this.y >= -100) {
            this.y -= 10;
        }
    }

    swimDown() {
        if (this.y <= 280) {
            this.y += 10;
        }
    }

    swimRight() {
        if (this.x <= 550) {
            this.x += 10;
        }
    }

    swimLeft() {
        if (this.x >= -30) {
            this.x -= 10;
        }
    }
}