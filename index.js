import Player from "./player.js"

let canvas = document.getElementById("playField");
let cx = canvas.getContext("2d");

const GAME_WIDTH = 400;
const GAME_HEIGHT = 400;
const PLAYER_SIZE = 40;

let player = new Player(PLAYER_SIZE, GAME_WIDTH, GAME_HEIGHT);
player.draw(cx);

let lastTime = 0;

// function gameLoop(timestamp)
// {
//     let dT = timestamp - lastTime;
//     lastTime = timestamp;

//     cx.clearRect(0, 0, 400, 400);
//     player.update(dT);
//     player.draw(cx);

//     requestAnimationFrame(gameLoop);
// }

// gameLoop();