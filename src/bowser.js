class Bowser {
  constructor() {
    this.keyPresses = {};
    this.dx = 0;
    this.dy = 0;
    this.posX = 30;
    this.posY = 400;
  }

  moveSprite(dx, dy, canvas) {
    this.posX +=dx
    if (this.posX+65 < 0){
      this.posX += 270
    }
  }
}
export default Bowser;