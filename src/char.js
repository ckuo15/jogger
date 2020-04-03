

class Char {
  constructor(){
    this.keyPresses = {};
    this.dx = 0;
    this.dy = 0;
    this.posX = 50;
    this.posY = 460;
    this.width = 45;
    this.height = 45;
    this.keydownListener = this.keydownListener.bind(this);
    this.keyupListener = this.keyupListener.bind(this);
    window.addEventListener("keydown", this.keydownListener, false);
    window.addEventListener("keyup", this.keyupListener, false);
  }

  keydownListener(event){
    this.keyPresses[event.key] = true;
    // debugger;
    // console.log("down")
  }

  keyupListener(e){
    this.keyPresses[e.key] = false;
    this.dx = 0;
    this.dy = 0;
    // console.log(this.keyPresses)
  }

  moveSprite(dx, dy, canvas){
    if (this.keyPresses["w"] || this.keyPresses["W"]){
      this.dy = -(dy)
    } else if (this.keyPresses["s"] || this.keyPresses["S"]){
      this.dy = dy
    } else if (this.keyPresses["a"] || this.keyPresses["A"]){
      this.dx = -(dx)
    } else if (this.keyPresses["d"] || this.keyPresses["D"]){
      this.dx = dx
    }
    if (this.posX + this.dx > 0 && this.posX + 55 + this.dx < 630 && this.posX + 55 + this.dx > 0){
      this.posX += this.dx;
    }
    if (this.posY + this.dy > 0 && this.posY + 50 + this.dy < 510 && this.posY + 50 + this.dy > 0){
      this.posY += this.dy;
    }
  }
}
// conditions between 200 - 630
export default Char;
// constructor({ pos, vel, radius, color }) {
//   this.pos = pos;
//   this.vel = vel;
//   this.radius = radius;
//   this.color = color;
// }

// move() {
//   this.pos[0] += this.vel[0];
//   this.pos[1] += this.vel[1];
// }

// draw(ctx) {
//   ctx.fillStyle = this.color;
//   ctx.beginPath();
//   ctx.arc(this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI);
//   ctx.fill();
// }