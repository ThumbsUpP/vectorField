export default class Vector {
	constructor(pos, magn, c) {
		this.x = pos.x
		this.y = pos.y
		this.a = pos.a
		this.magn = magn
		this.magn2 = 10
    this.radius = 1
    this.distance = 2
		this.c = c
	}

	draw(mousePos) {
		this.updateAngle(mousePos)
		let { c, x, y } = this
		c.beginPath()
		c.moveTo(x, y)
		c.lineTo(...this.getLinePathToMouse(mousePos))
		c.strokeStyle = "white"
		c.lineWidth = 1
		c.stroke()
	}

	getMagn(vector) {
		return Math.pow(
			vector.reduce((acc, curr) => acc + Math.pow(curr, 2), 0),
			0.5
		)
	}

	getUnitVector(vectorDir, magn) {
		return vectorDir.map((el) => (el / magn))
	}

	getProject2Dvector([vx, vy, vz]) {
		return [(this.distance / vz) * vx + this.x, (this.distance / vz) * vy + this.y]
  }
  
  getDirectionVector(mousePos) {
    let { x, y, z = 0 } = this
		let { x: xm, y: ym, zm = 50 } = mousePos
		return [xm -  x, ym - y, zm - z]
  }

	getLinePathToMouse(mousePos) {
		const dirVector = this.getDirectionVector(mousePos)
		const magn = this.getMagn(dirVector)
		const unitVector = this.getUnitVector(dirVector, magn)
		return this.getProject2Dvector(unitVector)
	}

	updateMagn(mousePos) {
		this.magn2 = this.computeDistance({ x, y }, mousePos)
	}

	computeDistance(v1, v2) {
		const { x: x1, y: y1 } = v1
		const { x: x2, y: y2 } = v2
		return Math.pow(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2), 0.5)
	}

	maprange(value, x1, y1, x2, y2) {
		;(value - x1) * ((y2 - x2) / (y1 - x1)) + x2
	}

	updateAngle(mousePos) {
		let { x, y } = this
		let { x: xm, y: ym, zm = 10 } = mousePos

		this.a = Math.atan2(y - ym, x - xm) + Math.PI
	}
}
