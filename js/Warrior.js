class Warrior {
  constructor(health, attack, defense, speed, position, image) {
    // Position
    this.y = CANVAS_HEIGHT - 50;
    this.x = position;
    // There are 5 columns: 25, 100, 175, 250, 325
    // Boundaries
    this.rightBoundary = CANVAS_WIDTH - this.width;
    this.bottomBoundary = CANVAS_HEIGHT - this.height;
    // Size
    this.height = 50;
    this.width = 50;
    // Warrior Stats
    this.health = health;
    this.attack = attack;
    this.defense = defense;
    this.speed = speed;
    this.destroyed = false;

    this.image = image;
  }

  mata() {
    if (!this.destroyed) {
      return this.attack;
    } else {
      return 0;
    }
  }

  receiveDamage(damage) {
    if (this.health - damage >= 0) {
      this.health -= damage;
    } else {
      this.destroyed = true;
      console.log("Destroyed");
    }
  }

  draw() {
    if (this.destroyed) {
      console.log("No se muestra");
      image(cross, this.x, this.y, this.width, this.height);
    } else {
      image(this.image, this.x, this.y, this.width, this.height);
    }
    this.maintainBoundaries();
    this.y -= this.speed / 10;
  }

  maintainBoundaries() {
    if (this.y >= this.bottomBoundary) {
      this.y = this.bottomBoundary;
    }
    if (this.y < 70) {
      this.y = 70;
    }
  }

  get bottomSide() {
    return this.y + this.height;
  }

  get topSide() {
    return this.y;
  }

  get leftSide() {
    return this.x;
  }
  get rightSide() {
    return this.x + this.width;
  }
}
