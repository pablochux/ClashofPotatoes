class Tower {
  constructor(
    health,
    attack,
    defense,
    speed,
    position,
    healthProgress,
    healthLabel
  ) {
    // Position
    this.y = 0;
    this.x = position;
    // There are 5 columns: 10, 80, 150, 220, 290

    this.healthProgress = healthProgress;
    // Size
    this.height = 70;
    this.width = 50;
    // Warrior Stats
    this.health = health;
    this.attack = attack;
    this.defense = defense;
    this.speed = speed;
    this.active = false;
    this.destroyed = false;
    this.healthLabel = healthLabel;
  }

  mata16() {
    if (!this.destroyed) {
      return this.attack;
    } else {
      return 0;
    }
  }

  receiveDamage(damage) {
    if (this.health - damage >= 0) {
      this.health -= damage;
      this.active = true;
    } else {
      this.destroyed = true;
      console.log("DESTROYED");
      this.healthLabel.innerText = "🔥 Tower Destroyed 🔥";
      this.healthProgress.style.display = "none";
    }
    this.healthProgress.value = this.health;
  }

  draw() {
    if (this.destroyed) {
      console.log("No se muestra");
      image(cross, this.x, this.y, this.width, this.height);
    } else {
      if (this.active) {
        image(activeTower, this.x, this.y, this.width, this.height);
      } else {
        image(tower, this.x, this.y, this.width, this.height);
      }
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
