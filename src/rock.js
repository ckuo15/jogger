class Rock {
  constructor() {
    this.keyPresses = {};
    this.dx = 0;
    this.dy = 0;
    this.posX = 0;
    this.posY = 75;
  }

  moveSprite(dx, dy, canvas) {
    this.posX += dx
    if (this.posX + 60 > 600) {
      this.posX = -500
    }
  }
}
export default Rock;