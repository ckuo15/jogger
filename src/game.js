import Char from "./char";
import Ant from "./ant";
import Bowser from "./bowser";
import Wolf from "./wolf";

let enemy = [Char, Ant, Bowser, Wolf];


if (char.posX < enemy.posX + enemy.width &&
  char.posX + char.width > enemy.posX &&
  char.posY < enemy.yposY + enemy.height &&
  char.posY + char.height > enemy.posY
) {
  console.log("collision!")
}

//wolf: width 90, height:50
// ant, bowser: width 60, height 50