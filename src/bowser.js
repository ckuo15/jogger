class Bowser {
  constructor(posX) {
    this.keyPresses = {};
    this.dx = 0;
    this.dy = 0;
    this.posX = posX;
    this.posY = 400;
    this.width = 35;
    this.height = 20;
  }

  moveSprite(dx, dy, canvas) {
    this.posX +=dx
    if (this.posX <= -60){
      this.posX += 800
    }
  }
}
export default Bowser;