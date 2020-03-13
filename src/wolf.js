class Wolf {
  constructor() {
    this.dx = 0;
    this.dy = 0;
    this.posX = 50;
    this.posY = 285;
  }

  moveSprite(dx, dy, canvas) {
    this.posX += dx
    if (this.posX + 195 < -30) {
      this.posX += 250
    }
  }
}
export default Wolf;