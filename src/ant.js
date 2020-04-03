class Ant {
  constructor(posX) {
    this.keyPresses = {};
    this.dx = 0;
    this.dy = 0;
    this.posX = posX;
    this.posY = 335;
    this.width = 25;
    this.height = 15;
  }

  moveSprite(dx, dy, canvas) {
    this.posX += dx
    if (this.posX > 750) {
      this.posX = 0
    }
  }
}
export default Ant;