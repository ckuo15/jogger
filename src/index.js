// const GameView = require("./game_view.js")
// window.GameView = GameView;
import Char from "./char";
import Bowser from "./bowser";
import Ant from "./ant";
import Wolf from "./wolf";
import Rock from "./rock";
import bullet from "./bullet";

let canvas = document.createElement("canvas"); canvas.className="canvas";
let ctx = canvas.getContext("2d");
document.addEventListener("DOMContentLoaded", e => {
  let startButton = document.getElementById("start");
  let menu = document.getElementById("menu");
  let retryButton = document.getElementById("retry");
  let replayButton = document.getElementById("replay");
  canvas.classList.add("hidden");
  startButton.addEventListener("click", e => {
    e.preventDefault();
    canvas.classList.remove("hidden");
    menu.classList.add("hidden");
  })
  retryButton.addEventListener("click", e => {
    e.preventDefault();
    let gameoverModal = document.getElementById("gameover");
    gameoverModal.classList.add("hidden");
    populate(); 
  })
  replayButton.addEventListener("click", e => {
    e.preventDefault();
    let gamewonModal = document.getElementById("gamewon");
    gamewonModal.classList.add("hidden");
    populate();
  })
})

canvas.width = 600;
canvas.height = 503;
let mid = document.getElementById("mid")
mid.appendChild(canvas);

let enemies= [];
let isDead = false;
let hasWon = false;

let lava = new Image(); 
lava.src = "./dist/lava.png";
let lavaFloor = new Image(); 
lavaFloor.src = "./dist/Dungeon_A5.png";
let grass = new Image(); 
grass.src = "./dist/Dungeon_A4.png";
let charImage = new Image(); 
charImage.src = "./dist/cindyschar.png";
let bulletImage = new Image();
bulletImage.src = "./dist/flappy.png";
let wolfImage = new Image(); 
wolfImage.src = "./dist/wolf.png";
let bowserImage = new Image();
bowserImage.src = "./dist/bowser.png";
let antImage = new Image();
antImage.src = "./dist/ant.png";


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
let bullet1;
let bullet2;
let bullet3;
let bullet4;
let bullet5;

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
  bullet1 = new bullet(400, 150);
  bullet2 = new bullet(100, 100);
  bullet3 = new bullet(200, 130);
  bullet4 = new bullet(250, 110);
  bullet5 = new bullet(350, 80);
  enemies = [];
  enemies.push(wolf1, wolf2, wolf3, bowser1, bowser2, bowser3, ant1, ant2, ant3, bullet1, bullet2, bullet3, bullet4, bullet5);
}

function drawBackground(){
  // (5th, 6th number is x, y of the canvas)
  ctx.drawImage(lavaFloor, 0, 250, 145, 40, 0, 0, 615, 80);
  ctx.drawImage(lava, 0, 70, 615, 50);
  ctx.drawImage(lava, 0, 120, 615, 50);
  ctx.drawImage(lava, 0, 170, 615, 50);
  ctx.drawImage(lavaFloor, 0, 245, 145, 40, 0, 210, 615, 100)
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

function lavaCollision(){
  let charLeft = char.posX;
  let charBottom = char.posY;
  let charRight = charLeft + char.width-10;
  if (charBottom > 63 && charBottom < 176){
    if (charLeft > 80 && charRight < 135 || charLeft > 297 && charRight < 352 || charLeft > 513 && charRight < 568 ){
    } else {
      gameOver();
    }
  } 
}

function wonReplay(){
  let gamewonModal = document.getElementById("gamewon");
  gamewonModal.classList.remove("hidden");
}

function showReplay(){
    let gameoverModal = document.getElementById("gameover");
    gameoverModal.classList.remove("hidden");   
}

function gameOver(){
  isDead = true;
  showReplay();
  // resetGame();
};


function gameWon(){
  let charBottom = char.posY;

  if (charBottom < 60 && charBottom > 0){
    hasWon = true;
    wonReplay();
  }
}


function drawChar(){
  ctx.drawImage(wolfImage, 5, 10, 120, 60, wolf1.posX, wolf1.posY, 83, 50)
  ctx.drawImage(wolfImage, 5, 10, 120, 60, wolf2.posX, wolf2.posY, 83, 50)
  ctx.drawImage(wolfImage, 5, 10, 120, 60, wolf3.posX, wolf3.posY, 83, 50)
  ctx.drawImage(antImage, 0, 0, 30, 20, ant1.posX, ant1.posY, 60, 50)
  ctx.drawImage(antImage, 0, 0, 30, 20, ant2.posX, ant2.posY, 60, 50)
  ctx.drawImage(antImage, 0, 0, 30, 20, ant3.posX, ant3.posY, 60, 50)
  ctx.drawImage(bowserImage, 5, 90, 80, 80, bowser1.posX, bowser1.posY, 60, 50)
  ctx.drawImage(bowserImage, 5, 90, 80, 80, bowser2.posX, bowser2.posY, 60, 50)
  ctx.drawImage(bowserImage, 5, 90, 80, 80, bowser3.posX, bowser3.posY, 60, 50)
  // ctx.beginPath();
  // ctx.rect(wolf1.posX, wolf1.posY, 83, 50);
  // ctx.stroke();

  ctx.drawImage(bulletImage, bullet1.posX, bullet1.posY, 40, 30);
  ctx.drawImage(bulletImage, bullet2.posX, bullet2.posY, 40, 30);
  ctx.drawImage(bulletImage, bullet3.posX, bullet3.posY, 40, 30);
  ctx.drawImage(bulletImage, bullet4.posX, bullet4.posY, 40, 30);
  ctx.drawImage(bulletImage, bullet5.posX, bullet5.posY, 40, 30);

  // ctx.drawImage(rockImage, 478, 720, 45, 45, 10, 235, 35, 35) //skeleton
  ctx.drawImage(charImage, 0, 0, 48, 48, char.posX, char.posY, 45, 45)
  // ctx.beginPath();
  // ctx.rect(char.posX, char.posY, 45, 45);
  // ctx.stroke();
}
// y = 63-176
const ROCKS = [
  { pos: [80, 155] },
  { pos: [80, 100] },
  { pos: [80, 60] },
  { pos: [80, 90] },
  { pos: [80, 119] },
  { pos: [513, 155] },
  { pos: [513, 100] },
  { pos: [513, 60] },
  { pos: [513, 90] },
  { pos: [513, 119] },
  { pos: [297, 155] },
  { pos: [297, 100] },
  { pos: [297, 60] },
  { pos: [297, 90] },
  { pos: [297, 119] },
]

let rocksArr = [];
function populateRocks() {
  
  ROCKS.forEach(rock => {
    rocksArr.push(new Rock(rock, ctx));
  })
}

function renderRocks() {
  rocksArr.forEach(rock => {
    rock.render();
  })
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
  bullet1.moveSprite(5,0,canvas);
  bullet2.moveSprite(3, 0, canvas);
  bullet3.moveSprite(2, 0, canvas);
  bullet4.moveSprite(4, 0, canvas);
  bullet5.moveSprite(5, 0, canvas);
  drawBackground();
  renderRocks();
  drawChar();
  collision();
  lavaCollision();
  gameWon();
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
populateRocks();
draw();
