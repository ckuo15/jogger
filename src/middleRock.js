class middleRock {
  constructor() {
    this.dx = 0;
    this.dy = 0;
    this.posX = 110;
    this.posY = 120;
    this.width = 70;
  }

  moveSprite(dx, dy, canvas) {
    this.posX += dx
    if (this.posX + 65 < -300) {
      this.posX = 600
    }
  }
}
export default middleRock;