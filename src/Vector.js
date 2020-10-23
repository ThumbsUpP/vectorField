export default class Vector {
  constructor(pos, magn, c){
    this.x = pos.x;
    this.y = pos.y;
    this. a= pos.a;
    this.magn = magn;
    this.radius = 1;
    this.c = c;
  }

  draw(){
    let {c, x, y, a, magn} = this
    c.beginPath();
    c.moveTo(x, y)
    c.lineTo(x + (magn * Math.cos(a)), y + (magn *Math.sin(a)))
    c.strokeStyle = "white";
    c.lineWidth = 2;
    c.stroke();
  }
}