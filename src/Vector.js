export default class Vector {
  constructor(pos, magn, c){
    this.x = pos.x;
    this.y = pos.y;
    this.a = pos.a;
    this.magn = magn;
    this.magn2 = 10;
    this.radius = 1;
    this.c = c;
  }

  draw(){
    let {c, x, y, a, magn} = this
    c.beginPath();
    c.moveTo(x, y)
    c.lineTo(x + (magn * Math.cos(a)), y + (magn *Math.sin(a)))
    c.strokeStyle = "white";
    c.lineWidth = 1;
    c.stroke();
  }

  updateMagn(mousePos) {
    this.magn2 = this.computeDistance({x,y}, mousePos)
  }

  updateAngle(mousePos) {
    let { x, y } = this
    this.a = Math.atan2(y-mousePos.y, x-mousePos.x) + Math.PI;
  }

  maprange(value, x1, y1, x2, y2) {
    (value - x1) * ((y2 - x2) / (y1 - x1)) + x2;
  }

  computeDistance(v1, v2) {
    const { x: x1, y: y1 } = v1;
    const { x: x2, y: y2 } = v2;
    return Math.pow(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2), 0.5);
  };
}