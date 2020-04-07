class bullet {
  constructor(posX, posY) {
    this.dx = 0;
    this.dy = 0;
    this.posX = posX;
    this.posY = posY;
    this.width = 40;
    this.height= 30;
  }

  moveSprite(dx, dy, canvas) {
    this.posX += dx
    if (this.posX> 750) {
      this.posX = 0
    }
  }
}
export default bullet;