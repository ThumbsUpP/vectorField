import { WINDOW_SIZE } from "./constants";
import Ball from "./Ball";
import Vector from "./Vector";
import Line from "./Line";
import { compact } from "lodash/fp";

const { WIDTH, HEIGHT } = WINDOW_SIZE;
const canvas = document.getElementById("my-canvas");

canvas.width = WIDTH;
canvas.height = HEIGHT;

const c = canvas.getContext("2d");

let mouseX = 0;
let mouseY = 0;

const getMousePosition = e => {
  mouseX = e.clientX;
  mouseY = e.clientY;
};

addEventListener("mousemove", getMousePosition, false);

const getVectorCoord = ({width, height}, modulo) => {
  let result = []
  for (let x = modulo/2; x < width - modulo/2; x += modulo) {
    for (let y = modulo/2; y < height - modulo/2; y += modulo) {
      result.push({x, y, a: Math.PI / 4})
    }
  }
  return result
}

let coords = getVectorCoord({width : WIDTH, height : HEIGHT}, 50)

const createVectors = () => coords.map(el => new Vector(el, 8, c))
const vectors = createVectors()
//console.log(vectors)

const animate = () => {
  c.clearRect(0, 0, WIDTH, HEIGHT);
  vectors.map(vector => vector.draw())
  requestAnimationFrame(animate);
};

animate();
