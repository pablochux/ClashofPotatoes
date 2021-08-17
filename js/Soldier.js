class Soldier {
  constructor() {
    this.y = CANVAS_HEIGHT - 50;
    this.x = 0;
    this.height = 50;
    this.width = 50;
    this.velocity = 0;
  }

  draw() {
    image(theViking, this.x, this.y, this.width, this.height);
    this.y--;
  }
}

// DEPLOYMENT
