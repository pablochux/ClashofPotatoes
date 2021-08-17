class Warrior {
  constructor(health, attack, defense, speed, position) {
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
  }

  attack() {
    return this.strength;
  }

  receiveDamage(damage) {
    this.health -= damage;
  }

  draw() {
    this.maintainBoundaries();
    image(theViking, this.x, this.y, this.width, this.height);
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
}
