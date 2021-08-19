class Player {
  constructor() {
    this.resources = 5;
    this.dead = false;
    this.updateResources();
  }

  /**
   * Updates the number on the canvas of the resources available
   */
  updateResources() {
    player1Resources.innerText = this.resources;
  }

  /**
   * 10 is the limit of resources that one player can have
   * If max resources, log it
   */
  addResource() {
    if (this.resources < 10) {
      this.resources++;
      this.updateResources();
    } else {
      console.log("Max resources");
    }
  }

  /**
   *
   * @param {number of resources that will be invested} num
   * @returns true if it's possible, false if not
   */
  investResource(num) {
    if (this.resources >= num) {
      this.resources -= num;
      this.updateResources();
      console.log("Invested " + num + " resources");
      return true;
    }
    return false;
  }
}
