import { WINDOW_SIZE } from "./constants";
import Vector from "./Vector";
import { compact } from "lodash/fp";

const { WIDTH, HEIGHT } = WINDOW_SIZE;
const canvas = document.getElementById("my-canvas");

canvas.width = WIDTH;
canvas.height = HEIGHT;

const c = canvas.getContext("2d");

let mousePos = {x: 0, y: 0};
let vectorCoords
let vectors

const getMousePosition = e => {
  mousePos = {x: e.clientX, y: e.clientY};
};

const getVectorCoord = ({width, height}, modulo) => {
  let result = []
  for (let x = modulo/2; x < width - modulo/2; x += modulo) {
    for (let y = modulo/2; y < height - modulo/2; y += modulo) {
      result.push({x, y, a: Math.PI / 4})
    }
  }
  return result
}

const createVectors = () => vectorCoords.map(el => new Vector(el, 12, c))

const animate = () => {
  c.clearRect(0, 0, WIDTH, HEIGHT);
  vectors.map(vector => vector.draw(mousePos) )
  requestAnimationFrame(animate);
};

function init() {
  initVector()
  animate();
  addEventListener("mousemove", getMousePosition, false);
}


function initVector(){
  vectorCoords = getVectorCoord({width : WIDTH, height : HEIGHT}, 50)
  vectors = createVectors()
} 

addEventListener("resize", initVector)

init()