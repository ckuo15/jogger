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


let enemies= [];
let isDead = false;

let lava = new Image(); 
// enemies.push(lava);
lava.src = "./dist/lava.png";
let lavaFloor = new Image(); 
lavaFloor.src = "./dist/Dungeon_A5.png";
let grass = new Image(); 
grass.src = "./dist/Dungeon_A4.png";

let charImage = new Image(); 
charImage.src = "./dist/cindyschar.png";



let wolfImage = new Image(); 
wolfImage.src = "./dist/wolf.png";

let bowserImage = new Image();
bowserImage.src = "./dist/bowser.png";

let antImage = new Image();
antImage.src = "./dist/ant.png";

let rock = new Rock();
let middlerock= new middleRock();
let rockImage = new Image(); 
rockImage.src = "./dist/Dungeon_B.png";

let wolf1;
let wolf2;
let wolf3;
let bowser1;
let bowser2;
let bowser3;
let ant1;
let ant2;
let ant3;
let char;

function populate(){
  char = new Char();
  wolf1 = new Wolf(50);
  wolf2 = new Wolf(300);
  wolf3 = new Wolf(550);
  bowser1 = new Bowser(30);
  bowser2 = new Bowser(300);
  bowser3 = new Bowser(570);
  ant1 = new Ant(0);
  ant2 = new Ant(260);
  ant3 = new Ant(520);
  enemies = [];
  enemies.push(wolf1, wolf2, wolf3, bowser1, bowser2, bowser3, ant1, ant2, ant3);
}

function drawBackground(){
  // (5th, 6th number is x, y of the canvas)
  ctx.drawImage(lavaFloor, 0, 250, 145, 40, 0, 0, 615, 80);
  ctx.drawImage(lava, 0, 70, 615, 50);
  ctx.drawImage(lava, 0, 120, 615, 50);
  ctx.drawImage(lava, 0, 170, 615, 50);

  ctx.drawImage(lavaFloor, 0, 245, 145, 40, 0, 220, 615, 60)
  ctx.drawImage(grass, 390, 105, 90, 50, 0, 280, 615, 60)
  ctx.drawImage(grass, 390, 105, 90, 50, 0, 340.2, 615, 60)
  ctx.drawImage(grass, 390, 105, 90, 50, 0, 400.4, 615, 60)
  ctx.drawImage(grass, 400, 270, 80, 50, 0, 460.6, 615, 40)

}

function collision(){
  let charLeft = char.posX;
  let charBottom = char.posY;
  let charRight = charLeft + char.width;
  let charTop = charBottom + char.height;
  enemies.forEach(enemy => {
    if (charLeft < enemy.posX + enemy.width &&
      charRight > enemy.posX &&
      charBottom < enemy.posY + enemy.height &&
      charTop > enemy.posY
    ) {
      gameOver();
      return true;
    } 
  })
  return false;
}

function gameOver(){
  isDead = true;
};

// function onRock(){

// }

// an array for all the rocks. 

function drawChar(){
  ctx.drawImage(wolfImage, 5, 10, 120, 60, wolf1.posX, wolf1.posY, 90, 50)
  ctx.drawImage(wolfImage, 5, 10, 120, 60, wolf2.posX, wolf2.posY, 90, 50)
  ctx.drawImage(wolfImage, 5, 10, 120, 60, wolf3.posX, wolf3.posY, 90, 50)
  ctx.drawImage(antImage, 0, 0, 30, 20, ant1.posX, ant1.posY, 60, 50)
  ctx.drawImage(antImage, 0, 0, 30, 20, ant2.posX, ant2.posY, 60, 50)
  ctx.drawImage(antImage, 0, 0, 30, 20, ant3.posX, ant3.posY, 60, 50)
  ctx.drawImage(bowserImage, 5, 90, 80, 80, bowser1.posX, bowser1.posY, 60, 50)
  ctx.drawImage(bowserImage, 5, 90, 80, 80, bowser2.posX, bowser2.posY, 60, 50)
  ctx.drawImage(bowserImage, 5, 90, 80, 80, bowser3.posX, bowser3.posY, 60, 50)

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
  bowser1.moveSprite(-2, 0, canvas);
  bowser2.moveSprite(-2, 0, canvas);
  bowser3.moveSprite(-2, 0, canvas);
  ant1.moveSprite(2,0, canvas);
  ant2.moveSprite(2, 0, canvas);
  ant3.moveSprite(2, 0, canvas);

  wolf1.moveSprite(-2, 0, canvas);
  wolf2.moveSprite(-2, 0, canvas);
  wolf3.moveSprite(-2, 0, canvas);

  rock.moveSprite(2,0, canvas);
  middlerock.moveSprite(-2,0,canvas);
  drawBackground();
  drawChar();
  collision();
  requestAnimationFrame(draw)
  if (isDead) {
    isDead = false;
    populate();
  }
  // if (isDead) {
  //   isDead = false;
  //   populate();
  //   draw();
  // } level up!
 
}
populate();
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
