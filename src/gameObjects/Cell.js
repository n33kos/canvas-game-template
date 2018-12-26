import Entity  from 'class/Entity';
import Vector2 from 'class/Vector2';

export default class extends Entity {
  constructor(config) {
    super(config);

    const {
      strokeStyle,
      lineWidth,
      x,
      y,
      id,
    } = config;

    this.strokeStyle = strokeStyle;
    this.lineWidth = lineWidth;
    this.x = x;
    this.y = y;
    this.id = id;
    this.wasMouseDown = false;

    this.neighborPattern = [];
    if (Math.random() > 0.25) this.neighborPattern.push(0);
    if (Math.random() > 0.25) this.neighborPattern.push(1);
    if (Math.random() > 0.25) this.neighborPattern.push(2);
    if (Math.random() > 0.25) this.neighborPattern.push(3);
  }

  init(grid) {
    this.grid = grid;
    this.neighbors = this.getNeighbors();
  }

  getNeighbors() {
    const neighbors = [];

    if (this.neighborPattern.includes(0)) {
      neighbors.push(this.grid.find(cell => cell.id == `${this.x - 1}_${this.y}`));
    }
    if (this.neighborPattern.includes(1)) {
      neighbors.push(this.grid.find(cell => cell.id == `${this.x}_${this.y - 1}`));
    }
    if (this.neighborPattern.includes(2)) {
      neighbors.push(this.grid.find(cell => cell.id == `${this.x + 1}_${this.y}`));
    }
    if (this.neighborPattern.includes(3)) {
      neighbors.push(this.grid.find(cell => cell.id == `${this.x}_${this.y + 1}`));
    }

    return neighbors;
  }

  update() {
    this.handleControls();
  }

  handleControls() {
    if (!this.wasMouseDown && this.GameState.Controls.isMouseDown) this.wasMouseDown = true;
    if (this.wasMouseDown && !this.GameState.Controls.isMouseDown) {
      this.wasMouseDown = false;

      if (this.isWithinCell(this.GameState.Controls.lastPosition)) {
        this.rotateCell(1);
      }
    }
  }

  isWithinCell(position) {
    return (Math.floor((position.x * window.devicePixelRatio) / this.dimensions.x) === this.x
      && Math.floor((position.y * window.devicePixelRatio) / this.dimensions.y) === this.y);
  }

  rotateCell(direction) {
    this.neighborPattern = this.neighborPattern.map(id => {
      id += direction;
      if (id < 0) id = 3;
      if (id > 3) id = 0;
      return id;
    });
    this.neighbors = this.getNeighbors();
  }

  drawEntity() {
    this.drawFill();
    this.drawOutline();
    this.drawPathways();
  }

  drawFill() {
    this.GameState.Canvas.ctx.beginPath();
    this.GameState.Canvas.ctx.rect(this.position.x, this.position.y, this.dimensions.x, this.dimensions.y);
    this.GameState.Canvas.ctx.fillStyle = this.fillStyle;
    this.GameState.Canvas.ctx.fill();
  }

  drawOutline() {
    this.GameState.Canvas.ctx.beginPath();
    this.GameState.Canvas.ctx.lineWidth = this.lineWidth;
    this.GameState.Canvas.ctx.rect(this.position.x, this.position.y, this.dimensions.x, this.dimensions.y);
    this.GameState.Canvas.ctx.strokeStyle = this.strokeStyle;
    this.GameState.Canvas.ctx.stroke();
  }

  drawPathways() {
    this.neighborPattern.forEach(directionId => {
      const halfWidth = (this.dimensions.x / 2);
      const start = new Vector2(
        this.position.x + halfWidth,
        this.position.y + halfWidth,
      );
      const destination = new Vector2(
        this.position.x + halfWidth,
        this.position.y + halfWidth,
      );
      if (directionId === 0) destination.x -= halfWidth;
      if (directionId === 1) destination.y -= halfWidth;
      if (directionId === 2) destination.x += halfWidth;
      if (directionId === 3) destination.y += halfWidth;

      this.GameState.Canvas.ctx.beginPath();
      this.GameState.Canvas.ctx.lineWidth = 5;
      this.GameState.Canvas.ctx.strokeStyle = 'limegreen';
      this.GameState.Canvas.ctx.moveTo(start.x, start.y);
      this.GameState.Canvas.ctx.lineTo(destination.x, destination.y);
      this.GameState.Canvas.ctx.stroke();
    });
  }
}
