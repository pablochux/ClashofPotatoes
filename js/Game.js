class Game {
  constructor() {
    this.background = new Background();
    this.player1 = new Player();
    this.player2 = new Player();
    this.warriors1 = [];

    this.player1Towers = [
      new Tower(55, 10, 10, 10, 25, 0, tower1health, tower1label),
      new Tower(55, 10, 10, 10, 100, 0, tower2health, tower2label),
      new Tower(55, 10, 10, 10, 175, 0, tower3health, tower3label),
      new Tower(55, 10, 10, 10, 250, 0, tower4health, tower4label),
      new Tower(55, 10, 10, 10, 325, 0, tower5health, tower5label),
    ];

    this.player2Towers = [
      new Tower(9, 10, 10, 10, 25, 530, tower1health2, tower1label2),
      new Tower(9, 10, 10, 10, 100, 530, tower2health2, tower2label2),
      new Tower(9, 10, 10, 10, 175, 530, tower3health2, tower3label2),
      new Tower(9, 10, 10, 10, 250, 530, tower4health2, tower4label2),
      new Tower(9, 10, 10, 10, 325, 530, tower5health2, tower5label2),
    ];

    this.selectedColumn;
  }

  setup() {
    createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
  }

  draw() {
    if (this.player1.dead) {
      console.log("VICTORY!");
      window.location.href = "win.html";
    } else {
      clear();
      this.background.draw();

      let dead = true;
      this.player1Towers.forEach((element) => {
        element.draw();
        if (!element.destroyed) {
          dead = false;
        }
      });

      if (dead) {
        this.player1.dead = true;
        window.location.href = "win.html";
      }

      this.warriors1.forEach((element) => {
        element.draw();
      });

      // After 2 seconds we add one resource to the player
      if (frameCount % 60 === 0) {
        //   console.log("Adding 1 resource to Player 1");
        this.player1.addResource();
      }

      // Check that the game is not over

      // Warriors and towers Collision check
      if (this.warriors1.length >= 1) {
        console.log("Hey");
        this.warriors1.forEach((warrior) => {
          this.player1Towers.forEach((tower) => {
            if (this.collisionCheck(warrior, tower)) {
              console.log(
                "Tower: Health: " + tower.health + "Attacked: " + warrior.attack
              );
              console.log(
                "Warrior: Health: " +
                  warrior.health +
                  "Attacked: " +
                  tower.attack
              );
              if (!tower.destroyed) {
                warrior.receiveDamage(tower.attack);
              }
              if (!warrior.destroyed) {
                tower.receiveDamage(warrior.attack);
              }

              setTimeout(() => {
                console.log("Resting!");
              }, 2000);
            }
          });
        });
      }

      //   if (frameCount % 320 === 0) {
      //     //   console.log("Adding 1 resource to Player 1");
      //     this.player2.dead = true;
      //   }
    }
  }

  collisionCheck(player, tower) {
    // UA > TB
    // RA > LB
    // LA < RB
    // TA < UB

    if (player.bottomSide < tower.topSide) {
      return false;
    }

    if (player.rightSide < tower.leftSide) {
      return false;
    }

    if (player.leftSide > tower.rightSide) {
      return false;
    }

    if (player.topSide > tower.bottomSide) {
      return false;
    }

    return true;
  }

  keyPressed() {
    // Selection of Positions
    if (this.selectedColumn) {
      // If there's a position selected, depending on the key we'll add a warrior
      if (keyCode === WARRIOR1) {
        if (this.player1.investResource(3)) {
          1;
          // add warrior to the warriors array
          this.warriors1.push(
            new Warrior(100, 1, 10, 10, this.selectedColumn, theViking)
          );
          this.selectedColumn = false;
          player1Position.innerText = "none";
          console.log("Se crea WARRIOR");
        } else {
          alert("You don't have resources yet. Daddy chill");
        }
      }
      if (keyCode === WARRIOR2) {
        if (this.player1.investResource(5)) {
          1;
          // add warrior to the warriors array
          this.warriors1.push(
            new Warrior(100, 2, 20, 20, this.selectedColumn, filipe)
          );
          this.selectedColumn = false;
          player1Position.innerText = "none";
          console.log("Se crea WARRIOR");
        } else {
          alert("You don't have resources yet. Daddy chill");
        }
      }
      if (keyCode === WARRIOR3) {
        if (this.player1.investResource(2)) {
          1;
          // add warrior to the warriors array
          this.warriors1.push(
            new Warrior(100, 40, 3, 3, this.selectedColumn, andre)
          );
          this.selectedColumn = false;
          player1Position.innerText = "none";
          console.log("Se crea WARRIOR");
        } else {
          alert("You don't have resources yet. Daddy chill");
        }
      }
    } else {
      // If there's no position selected, we select a position or we show a message
      if (keyCode === POS1) {
        this.selectedColumn = 25;
        player1Position.innerText = 1;
        console.log("Column selected: 1");
      } else if (keyCode === POS2) {
        this.selectedColumn = 100;
        player1Position.innerText = 2;
        console.log("Column selected: 2");
      } else if (keyCode === POS3) {
        this.selectedColumn = 175;
        player1Position.innerText = 3;
        console.log("Column selected: 3");
      } else if (keyCode === POS4) {
        this.selectedColumn = 250;
        player1Position.innerText = 4;
        console.log("Column selected: 4");
      } else if (keyCode === POS5) {
        this.selectedColumn = 325;
        player1Position.innerText = 5;
        console.log("Column selected: 5");
      } else {
        alert("Select the column you want to attack. Keys 1-2-3-4-5");
      }
    }
  }
}

// This.chosen column
//
