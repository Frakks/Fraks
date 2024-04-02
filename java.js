let canvas = document.getElementById("snakecanvas")
let context = canvas. get.context("2d");

const box = 20;
let snake = [{x: 10, * box, y: 10 * box}]
let food = (x: Math.floor (Math.Random() * 20) * box);
let  direction = "right";

document.addEventListener("keydown, changeDirection")
