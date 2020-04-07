class Wolf {
  constructor(posX) {
    this.dx = 0;
    this.dy = 0;
    this.posX = posX;
    this.posY = 285;
    this.width = 83;
    this.height = 50;
  }

  moveSprite(dx, dy, canvas) {
    this.posX += dx
    if (this.posX <= -90) { // 0 - width
      this.posX += 800
    }
  }
}
export default Wolf;