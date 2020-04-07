class Rock {
  constructor(rock, ctx) {
    this.dx = 0;
    this.dy = 0;
    this.posX = rock.pos[0];
    this.posY = rock.pos[1];
    this.height = 55;
    this.width = 55;
    this.hazardous = false;
    this.ctx = ctx;
    this.src = "./dist/Dungeon_B.png"
  }

  render() {
    let rockImage = new Image(); 
    rockImage.src = "./dist/Dungeon_B.png";
    this.ctx.drawImage(rockImage, 482, 100, 45, 40, this.posX, this.posY, this.width, this.height)
    // this.ctx.beginPath();
    // this.ctx.rect(this.posX, this.posY, 55, 55);
    // this.ctx.stroke();
  }

  // moveSprite(dx, dy, canvas) {
  //   this.posX += dx
  //   if (this.posX + 60 > 600) {
  //     this.posX = -500
  //   }
  // }
}

export default Rock;