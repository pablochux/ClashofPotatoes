class Game {
  constructor() {
    this.background = new Background();
    this.player1 = new Player();
    this.warriors1 = new Warrior(10, 10, 10, 10, 25);

    this.player1Towers = [
      new Tower(10, 10, 10, 10, 25),
      new Tower(10, 10, 10, 10, 100),
      new Tower(10, 10, 10, 10, 175),
      new Tower(10, 10, 10, 10, 250),
      new Tower(10, 10, 10, 10, 325),
    ];
  }

  setup() {
    createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
  }

  draw() {
    clear();
    this.background.draw();
    this.warriors1.draw();
    this.player1Towers.forEach((element) => {
      element.draw();
    });

    // After 2 seconds we add one resource to the player
    if (frameCount % 120 === 0) {
      //   console.log("Adding 1 resource to Player 1");
      this.player1.addResource();
    }
  }

  keyPressed() {
    // 1 -> Soldado (coste: 3)
    // 2 -> Arquero

    // Se quiere añadir un soldado
    if (keyCode === KEY1) {
      if (this.player1.investResource(3)) {
        this.warriors.draw();
        console.log("Se crea WARRIOR");
      }
    }
  }
}
