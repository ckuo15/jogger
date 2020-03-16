// const GameView = require("./game_view.js")
// window.GameView = GameView;
import Char from "./char";
import Bowser from "./bowser";
import Ant from "./ant";
import Wolf from "./wolf";
import Rock from "./rock";
import middleRock from "./middleRock";

let canvas = document.createElement("canvas"); canvas.className="canvas";
let ctx = canvas.getContext("2d");

canvas.width = 600; //385
canvas.height = 600; //100
document.body.appendChild(canvas);

let lava = new Image(); 
lava.src = "./dist/lava.png";
let lavaFloor = new Image(); 
lavaFloor.src = "./dist/Dungeon_A5.png";
let grass = new Image(); 
grass.src = "./dist/Dungeon_A4.png";

let charImage = new Image(); 
charImage.src = "./dist/cindyschar.png";
let char = new Char();

let wolf = new Wolf();
let wolfImage = new Image(); 
wolfImage.src = "./dist/wolf.png";

let bowser = new Bowser();
let bowserImage = new Image(); 
bowserImage.src = "./dist/bowser.png";

let ant = new Ant();
let antImage = new Image(); 
antImage.src = "./dist/ant.png";

let rock = new Rock();
let middlerock= new middleRock();
let rockImage = new Image(); 
rockImage.src = "./dist/Dungeon_B.png";
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
  ctx.drawImage(wolfImage, 5, 10, 120, 60, wolf.posX, wolf.posY, 90, 50)
  ctx.drawImage(wolfImage, 5, 10, 120, 60, wolf.posX + 250, wolf.posY, 90, 50)
  ctx.drawImage(wolfImage, 5, 10, 120, 60, wolf.posX + 500, wolf.posY, 90, 50)
  ctx.drawImage(antImage, 0, 0, 30, 20, ant.posX, ant.posY, 60, 50)
  ctx.drawImage(antImage, 0, 0, 30, 20, ant.posX + 260, ant.posY, 60, 50)
  ctx.drawImage(antImage, 0, 0, 30, 20, ant.posX+520, ant.posY, 60, 50)
  ctx.drawImage(bowserImage, 0, 90, 80, 80, bowser.posX+270, bowser.posY, 60, 50)
  ctx.drawImage(bowserImage, 0, 90, 80, 80, bowser.posX + 540, bowser.posY, 60, 50)
  ctx.drawImage(bowserImage, 0, 90, 80, 80, bowser.posX, bowser.posY, 60, 50)

  ctx.drawImage(rockImage, 480, 100, 45, 40, rock.posX, rock.posY, 35, 35) //33
  ctx.drawImage(rockImage, 480, 100, 45, 40, rock.posX + 33, rock.posY, 35, 35)
  ctx.drawImage(rockImage, 480, 100, 45, 40, rock.posX +66, rock.posY, 35, 35)

  ctx.drawImage(rockImage, 480, 100, 45, 40, rock.posX +200, rock.posY, 35, 35) //144
  ctx.drawImage(rockImage, 480, 100, 45, 40, rock.posX +230, rock.posY, 35, 35)
  ctx.drawImage(rockImage, 480, 100, 45, 40, rock.posX +260, rock.posY, 35, 35) //420

  ctx.drawImage(rockImage, 480, 100, 45, 40, rock.posX +430, rock.posY, 35, 35)//189
  ctx.drawImage(rockImage, 480, 100, 45, 40, rock.posX +460, rock.posY, 35, 35)
  ctx.drawImage(rockImage, 480, 100, 45, 40, rock.posX +490, rock.posY, 35, 35)

  //middle rocks
  ctx.drawImage(rockImage, 480, 100, 45, 40, middlerock.posX, middlerock.posY, 35, 35)
  ctx.drawImage(rockImage, 480, 100, 45, 40, middlerock.posX + 33, middlerock.posY, 35, 35)

  ctx.drawImage(rockImage, 480, 100, 45, 40, middlerock.posX +230, middlerock.posY, 35, 35)
  ctx.drawImage(rockImage, 480, 100, 45, 40, middlerock.posX + 263, middlerock.posY, 35, 35)

  ctx.drawImage(rockImage, 480, 100, 45, 40, middlerock.posX + 430, middlerock.posY, 35, 35)
  ctx.drawImage(rockImage, 480, 100, 45, 40, middlerock.posX + 463, middlerock.posY, 35, 35)

  //bottom rocks
  ctx.drawImage(rockImage, 480, 100, 45, 40, rock.posX + 66, rock.posY + 100, 35, 35)
  ctx.drawImage(rockImage, 480, 100, 45, 40, rock.posX + 99, rock.posY + 100, 35, 35)
  ctx.drawImage(rockImage, 480, 100, 45, 40, rock.posX + 132, rock.posY + 100, 35, 35)

  ctx.drawImage(rockImage, 480, 100, 45, 40, rock.posX +267, rock.posY + 100, 35, 35)
  ctx.drawImage(rockImage, 480, 100, 45, 40, rock.posX +300, rock.posY + 100, 35, 35)
  ctx.drawImage(rockImage, 480, 100, 45, 40, rock.posX +333, rock.posY + 100, 35, 35)

  ctx.drawImage(rockImage, 480, 100, 45, 40, rock.posX +497, rock.posY + 100, 35, 35)
  ctx.drawImage(rockImage, 480, 100, 45, 40, rock.posX +530, rock.posY + 100, 35, 35)
  ctx.drawImage(rockImage, 480, 100, 45, 40, rock.posX +563, rock.posY + 100, 35, 35)

  ctx.drawImage(rockImage, 478, 720, 45, 45, 10, 235, 35, 35) //skeleton
  ctx.drawImage(charImage, 0, 3, 50, 50, char.posX, char.posY, 45, 45)
}

function draw(){
  ctx.clearRect(0,0, canvas.width, canvas.height);
  char.moveSprite(4, 4, canvas);
  bowser.moveSprite(-2, 0, canvas);
  ant.moveSprite(2,0, canvas);
  wolf.moveSprite(-2, 0, canvas);
  rock.moveSprite(2,0, canvas);
  middlerock.moveSprite(-2,0,canvas);
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
