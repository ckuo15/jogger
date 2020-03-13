// const GameView = require("./game_view.js")
// window.GameView = GameView;
import Char from "./char";
import Bowser from "./bowser";
// import "../stylesheets/index.css";

let canvas = document.createElement("canvas"); canvas.className="canvas";
let ctx = canvas.getContext("2d");

canvas.width = 600; //385
canvas.height = 600; //100
document.body.appendChild(canvas);

let lava = new Image(); 
lava.src = "./lava.png";
let lavaFloor = new Image(); 
lavaFloor.src = "./Dungeon_A5.png";
let grass = new Image(); 
grass.src = "./Dungeon_A4.png";
let charImage = new Image(); 
charImage.src = "cindyschar.png";
let char = new Char();
let wolf = new Image(); 
wolf.src = "wolf.png";
let bowser = new Bowser();
let bowserImage = new Image(); 
bowserImage.src = "bowser.png";
let ant = new Image(); 
ant.src = "ant.png";
let rock = new Image(); 
rock.src = "Dungeon_B.png";
// ctx.strokeStyle = 'black';
// ctx.strokeRect(380, 90, 615,500);
// (x, y, width, height)
// const gameView = new GameView(ctx);
// gameView.start()
// new GameView(game,ctx).start();
function drawBackground(){
  // (5th, 6th number is x, y of the canvas)
  ctx.drawImage(lavaFloor, 0, 250, 145, 40, 0, 0, 615, 80);
  ctx.drawImage(lava, 0, 70, 615, 50);
  ctx.drawImage(lava, 0, 120, 615, 50);
  ctx.drawImage(lava, 0, 170, 615, 50);
  // ctx.drawImage(lava, 380, 160, 615, 50);
  // ctx.drawImage(lava, 380, 210, 615, 50);
  // ctx.drawImage(lava, 380, 260, 615, 50);
  ctx.drawImage(lavaFloor, 0, 245, 145, 40, 0, 220, 615, 60)
  ctx.drawImage(grass, 390, 105, 90, 50, 0, 280, 615, 60)
  ctx.drawImage(grass, 390, 105, 90, 50, 0, 340.2, 615, 60)
  ctx.drawImage(grass, 390, 105, 90, 50, 0, 400.4, 615, 60)
  ctx.drawImage(grass, 400, 270, 80, 50, 0, 460.6, 615, 40)

  //dy = 60.2
}

function drawChar(){
  ctx.drawImage(wolf, 5, 10, 120, 60, 50, 285, 90, 50)
  ctx.drawImage(wolf, 5, 10, 120, 60, 260, 285, 90, 50)
  ctx.drawImage(wolf, 5, 10, 120, 60, 480, 285, 90, 50)
  ctx.drawImage(ant, 0, 0, 30, 20, 0, 340, 60, 50)
  ctx.drawImage(ant, 0, 0, 30, 20, 260, 340, 60, 50)
  ctx.drawImage(ant, 0, 0, 30, 20, 520, 340, 60, 50)
  ctx.drawImage(bowserImage, 0, 90, 80, 80, bowser.posX+270, bowser.posY, 60, 50)
  ctx.drawImage(bowserImage, 0, 90, 80, 80, bowser.posX + 540, bowser.posY, 60, 50)
  ctx.drawImage(bowserImage, 0, 90, 80, 80, bowser.posX, bowser.posY, 60, 50)
  ctx.drawImage(rock, 480, 100, 45, 40, 0, 75, 35, 35) //33
  ctx.drawImage(rock, 480, 100, 45, 40, 33, 75, 35, 35)
  ctx.drawImage(rock, 480, 100, 45, 40, 66, 75, 35, 35)
  ctx.drawImage(rock, 480, 100, 45, 40, 190, 75, 35, 35) //144
  ctx.drawImage(rock, 480, 100, 45, 40, 220, 75, 35, 35)
  ctx.drawImage(rock, 480, 100, 45, 40, 250, 75, 35, 35) //420
  ctx.drawImage(rock, 480, 100, 45, 40, 420, 75, 35, 35)//189
  ctx.drawImage(rock, 480, 100, 45, 40, 450, 75, 35, 35)
  ctx.drawImage(rock, 480, 100, 45, 40, 480, 75, 35, 35)
  ctx.drawImage(rock, 480, 100, 45, 40, 110, 120, 35, 35)
  ctx.drawImage(rock, 480, 100, 45, 40, 143, 120, 35, 35)
  ctx.drawImage(rock, 480, 100, 45, 40, 320, 120, 35, 35)
  ctx.drawImage(rock, 480, 100, 45, 40, 353, 120, 35, 35)
  ctx.drawImage(rock, 480, 100, 45, 40, 520, 120, 35, 35)
  ctx.drawImage(rock, 480, 100, 45, 40, 553, 120, 35, 35)
  ctx.drawImage(rock, 480, 100, 45, 40, 0, 175, 35, 35)
  ctx.drawImage(rock, 480, 100, 45, 40, 33, 175, 35, 35)
  ctx.drawImage(rock, 480, 100, 45, 40, 66, 175, 35, 35)
  ctx.drawImage(rock, 480, 100, 45, 40, 190, 175, 35, 35)
  ctx.drawImage(rock, 480, 100, 45, 40, 220, 175, 35, 35)
  ctx.drawImage(rock, 480, 100, 45, 40, 250, 175, 35, 35)
  ctx.drawImage(rock, 480, 100, 45, 40, 420, 175, 35, 35)
  ctx.drawImage(rock, 480, 100, 45, 40, 450, 175, 35, 35)
  ctx.drawImage(rock, 480, 100, 45, 40, 480, 175, 35, 35)
  ctx.drawImage(rock, 478, 720, 45, 45, 10, 235, 35, 35) //skeleton
  ctx.drawImage(charImage, 0, 3, 50, 50, char.posX, char.posY, 45, 45)
}

function draw(){
  ctx.clearRect(0,0, canvas.width, canvas.height);
  char.moveSprite(5, 5, canvas);
  bowser.moveSprite(-2, 0, canvas);
  drawBackground();
  drawChar();
  requestAnimationFrame(draw);
}
draw();

// (0, -5)
// have conditions, once out of bound no longer render it

// function drawBackground() {
//   // (5th, 6th number is x, y of the canvas)
//   ctx.drawImage(lavaFloor, 0, 250, 145, 40, 380, 90, 615, 80)
//   ctx.drawImage(lava, 380, 160, 615, 50);
//   ctx.drawImage(lava, 380, 210, 615, 50);
//   ctx.drawImage(lava, 380, 260, 615, 50);
//   ctx.drawImage(lavaFloor, 0, 245, 145, 40, 380, 310, 615, 60)
//   ctx.drawImage(grass, 390, 105, 90, 50, 380, 370, 615, 60)
//   ctx.drawImage(grass, 390, 105, 90, 50, 380, 430.2, 615, 60)
//   ctx.drawImage(grass, 390, 105, 90, 50, 380, 490.4, 615, 60)
//   ctx.drawImage(grass, 400, 270, 80, 50, 380, 550, 615, 40)
// }

// function drawChar() {
//   ctx.drawImage(wolf, 5, 10, 120, 60, 820, 375, 90, 50)
//   ctx.drawImage(wolf, 5, 10, 120, 60, 520, 375, 90, 50)
//   ctx.drawImage(ant, 0, 0, 30, 20, 400, 425, 60, 50)
//   ctx.drawImage(ant, 0, 0, 30, 20, 660, 425, 60, 50)
//   ctx.drawImage(ant, 0, 0, 30, 20, 930, 425, 60, 50)
//   ctx.drawImage(bowserImage, 0, 90, 80, 80, bowser.posX + 270, bowser.posY, 60, 50)
//   ctx.drawImage(bowserImage, 0, 90, 80, 80, bowser.posX + 540, bowser.posY, 60, 50)
//   ctx.drawImage(bowserImage, 0, 90, 80, 80, bowser.posX, bowser.posY, 60, 50)
//   ctx.drawImage(rock, 480, 100, 45, 40, 380, 160, 35, 35)
//   ctx.drawImage(rock, 480, 100, 45, 40, 413, 160, 35, 35)
//   ctx.drawImage(rock, 480, 100, 45, 40, 446, 160, 35, 35)
//   ctx.drawImage(rock, 480, 100, 45, 40, 590, 160, 35, 35)
//   ctx.drawImage(rock, 480, 100, 45, 40, 623, 160, 35, 35)
//   ctx.drawImage(rock, 480, 100, 45, 40, 656, 160, 35, 35)
//   ctx.drawImage(rock, 480, 100, 45, 40, 845, 160, 35, 35)
//   ctx.drawImage(rock, 480, 100, 45, 40, 878, 160, 35, 35)
//   ctx.drawImage(rock, 480, 100, 45, 40, 911, 160, 35, 35)
//   ctx.drawImage(rock, 480, 100, 45, 40, 490, 210, 35, 35)
//   ctx.drawImage(rock, 480, 100, 45, 40, 523, 210, 35, 35)
//   ctx.drawImage(rock, 480, 100, 45, 40, 723, 210, 35, 35)
//   ctx.drawImage(rock, 480, 100, 45, 40, 756, 210, 35, 35)
//   ctx.drawImage(rock, 480, 100, 45, 40, 380, 270, 35, 35)
//   ctx.drawImage(rock, 480, 100, 45, 40, 413, 270, 35, 35)
//   ctx.drawImage(rock, 480, 100, 45, 40, 446, 270, 35, 35)
//   ctx.drawImage(rock, 480, 100, 45, 40, 590, 270, 35, 35)
//   ctx.drawImage(rock, 480, 100, 45, 40, 623, 270, 35, 35)
//   ctx.drawImage(rock, 480, 100, 45, 40, 656, 270, 35, 35)
//   ctx.drawImage(rock, 480, 100, 45, 40, 845, 270, 35, 35)
//   ctx.drawImage(rock, 480, 100, 45, 40, 878, 270, 35, 35)
//   ctx.drawImage(rock, 480, 100, 45, 40, 911, 270, 35, 35)
//   ctx.drawImage(rock, 478, 720, 45, 45, 390, 320, 35, 35)
//   ctx.drawImage(charImage, 0, 3, 50, 50, char.posX, char.posY, 45, 45)
// }
