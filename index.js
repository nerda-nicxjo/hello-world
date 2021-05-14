import Player from "./player.js"

let canvas = document.getElementById("playField");
let cx = canvas.getContext("2d");

const GAME_WIDTH = 800;
const GAME_HEIGHT = 600;
const PLAYER_SIZE = 40;

let player = new Player("#0f0", PLAYER_SIZE, GAME_WIDTH / 2 - PLAYER_SIZE / 2 , GAME_HEIGHT / 2 - PLAYER_SIZE / 2);
player.draw(cx);

window.addEventListener('click', (event) =>
{
    let clickedPlayer = new Player("#f00", PLAYER_SIZE / 2, event.clientX, event.clientY);
    clickedPlayer.draw(cx);
});
