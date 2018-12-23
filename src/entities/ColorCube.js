import Entity from 'class/Entity';

export default class extends Entity {
  constructor(config) {
    super(config);

    const { color } = config;
    this.color = color;
  }

  drawEntity(ctx) {
    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.rect(0, 0, this.dimensions.x, this.dimensions.y);
    ctx.fill();

    this.rotation += 0.05;
  }
}
