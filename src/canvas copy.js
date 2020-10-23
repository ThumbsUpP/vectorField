import { WINDOW_SIZE } from "./constants";
import Ball from "./Ball";
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

let vectors = []

const getRecursiveCoord = (num, modulo) => {
  const result = num - modulo 
  if (result < 0) return 
  vectors.push(getRecursiveCoord(result, modulo))
}

const createVectors = () => {
  const xCoord = [...Array(80).keys()]
}

/* let ballPosition = [];

const balls = [...Array(80).keys()].map(() => new Ball(4));

const computeDistance = (ball1, ball2) => {
  const { x: x1, y: y1 } = ball1;
  const { x: x2, y: y2 } = ball2;
  return Math.pow(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2), 0.5);
};
 */
/* const maprange = (value, x1, y1, x2, y2) =>
  (value - x1) * ((y2 - x2) / (y1 - x1)) + x2;

const getLinePath = (ballsPos, limit) => {
  return ballsPos.map((position, outerIndex) => {
    const positions = ballsPos.map((pos, innerIndex) => {
      const dist = computeDistance(position, pos);
      return dist < limit && outerIndex !== innerIndex
        ? { position, pos, opacity: maprange(dist, limit, 0, 0, 0.6) }
        : null;
    });

    return compact(positions);
  });
}; */

getRecursiveCoord(WIDTH, 50)
console.log(vectors)

const animate = () => {
  c.clearRect(0, 0, WIDTH, HEIGHT);
 /*  ballPosition = [];
  balls.forEach(ball => {
    ball.draw();
    ball.run(mouseX, mouseY);
    ball.update();
    const pos = { x: ball.x, y: ball.y };
    ballPosition = [...ballPosition, pos];
  });

  const paths = getLinePath(ballPosition, 140);
  paths.forEach(path => {
    path.forEach(p => {
      c.beginPath();
      c.moveTo(p.position.x, p.position.y);
      c.lineTo(p.pos.x, p.pos.y);
      c.lineWidth = 1;
      c.strokeStyle = `rgba(255,255,255,${p.opacity.toFixed(3)})`;
      c.stroke();
      c.closePath();
    });
  }); */
  requestAnimationFrame(animate);
};

animate();
