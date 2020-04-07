class Rock {
  constructor(rock, ctx) {
    this.dx = 0;
    this.dy = 0;
    this.posX = rock.pos[0];
    this.posY = rock.pos[1];
    this.height = 35;
    this.width = 35;
    this.hazardous = false;
    this.ctx = ctx;
    this.src = "./dist/Dungeon_B.png"
  }

  render() {
    let rockImage = new Image(); 
    rockImage.src = "./dist/Dungeon_B.png";
    this.ctx.drawImage(rockImage, 480, 100, 45, 40, this.posX, this.posY, this.height, this.width)
  }

  // moveSprite(dx, dy, canvas) {
  //   this.posX += dx
  //   if (this.posX + 60 > 600) {
  //     this.posX = -500
  //   }
  // }
}

export default Rock;