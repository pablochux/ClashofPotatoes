class Game {
  constructor() {
    this.background = new Background();
    this.player1 = new Player();
    this.player2 = new Player();
    this.warriors1 = [];

    this.player1Towers = [
      new Tower(10, 10, 10, 10, 25),
      new Tower(10, 10, 10, 10, 100),
      new Tower(10, 10, 10, 10, 175),
      new Tower(10, 10, 10, 10, 250),
      new Tower(10, 10, 10, 10, 325),
    ];

    this.selectedColumn;
  }

  setup() {
    createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
  }

  draw() {
    if (this.player2.dead) {
      window.location.href =
        "https://pablochux.github.io/ClashofPotatoes/win.html";
    } else {
      clear();
      this.background.draw();

      this.player1Towers.forEach((element) => {
        element.draw();
      });

      this.warriors1.forEach((element) => {
        element.draw();
      });

      // After 2 seconds we add one resource to the player
      if (frameCount % 120 === 0) {
        //   console.log("Adding 1 resource to Player 1");
        this.player1.addResource();
        this.player1Towers[0].active = true;
      }

      //   if (frameCount % 320 === 0) {
      //     //   console.log("Adding 1 resource to Player 1");
      //     this.player2.dead = true;
      //   }
    }
  }

  keyPressed() {
    // Selection of Positions
    if (this.selectedColumn) {
      // If there's a position selected, depending on the key we'll add a warrior
      if (keyCode === WARRIOR1) {
        if (this.player1.investResource(3)) {
          1;
          // add warrior to the warriors array
          this.warriors1.push(new Warrior(10, 10, 10, 10, this.selectedColumn));
          this.selectedColumn = false;
          console.log("Se crea WARRIOR");
        } else {
          alert("You don't have resources yet. Daddy chill");
        }
      }
    } else {
      // If there's no position selected, we select a position or we show a message
      if (keyCode === POS1) {
        this.selectedColumn = 25;
        console.log("Column selected: 1");
      } else if (keyCode === POS2) {
        this.selectedColumn = 100;
        console.log("Column selected: 2");
      } else if (keyCode === POS3) {
        this.selectedColumn = 175;
        console.log("Column selected: 3");
      } else if (keyCode === POS4) {
        this.selectedColumn = 250;
        console.log("Column selected: 4");
      } else if (keyCode === POS5) {
        this.selectedColumn = 325;
        console.log("Column selected: 5");
      } else {
        alert("Select the column you want to attack. Keys 1-2-3-4-5");
      }
    }
  }
}

// This.chosen column
//
