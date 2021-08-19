class Tower {
  constructor(health, attack, defense, speed, position) {
    // Position
    this.y = 0;
    this.x = position;
    // There are 5 columns: 10, 80, 150, 220, 290

    // Size
    this.height = 70;
    this.width = 50;
    // Warrior Stats
    this.health = health;
    this.attack = attack;
    this.defense = defense;
    this.speed = speed;
    this.active = false;
  }

  attack() {
    return this.strength;
  }

  receiveDamage(damage) {
    this.health -= damage;
    this.active = true;
  }

  draw() {
    if (this.active) {
      image(activeTower, this.x, this.y, this.width, this.height);
    } else {
      image(tower, this.x, this.y, this.width, this.height);
    }
  }
}
