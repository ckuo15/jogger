class Rock {
  constructor() {
    this.keyPresses = {};
    this.dx = 0;
    this.dy = 0;
    this.posX = 0;
    this.posY = 335;
  }

  moveSprite(dx, dy, canvas) {
    this.posX += dx
    if (this.posX + 60 > 315) {
      this.posX = -6
    }
  }
}
export default Rock;