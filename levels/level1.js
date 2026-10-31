const level1 = new Level(
    [
        new JellyFish(),
        new JellyFish(),
        new JellyFish(),
    ],
    [
        new Light("assets/imgs/3. Background/Layers/1. Light/1.png", -100),
        new Light("assets/imgs/3. Background/Layers/1. Light/2.png", 400),
    ],
    [
        new BackgroundObject("assets/imgs/3. Background/Layers/5. Water/D1.png", 0),
        new BackgroundObject("assets/imgs/3. Background/Layers/5. Water/D2.png", 720),

        new BackgroundObject("assets/imgs/3. Background/Layers/4.Fondo 2/D1.png", 0),
        new BackgroundObject("assets/imgs/3. Background/Layers/4.Fondo 2/D2.png", 720),

        new BackgroundObject("assets/imgs/3. Background/Layers/3.Fondo 1/D1.png", 0),
        new BackgroundObject("assets/imgs/3. Background/Layers/3.Fondo 1/D2.png", 720),



        new BackgroundObject("assets/imgs/3. Background/Layers/2. Floor/D1.png", 0),
        new BackgroundObject("assets/imgs/3. Background/Layers/2. Floor/D2.png", 720),
    ],

);