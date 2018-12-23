/*
  Override this class to create game entities.
  Draw canvas calls at position 0,0 as position, rotation, and origin will be applied automagically
*/
import Vector2            from 'class/Vector2';
import worldSpaceToCanvas from 'lib/worldSpaceToCanvas';

export default class {
  constructor({
    dimensions = new Vector2(100, 100),
    GameState = null,
    origin = new Vector2(0.5, 0.5),
    position = new Vector2(),
    rotation = 0,
  }) {
    this.dimensions = dimensions;
    this.GameState = GameState;
    this.origin = origin;
    this.position = position;
    this.rotation = rotation;
  }

  init() {
    // Nothing here yet
  }

  drawEntity(ctx) {
    // Override this function to draw entity. Draw canvas calls at position 0,0.
  }

  draw(ctx) {
    const canvasPosition = worldSpaceToCanvas(this.GameState, this.position);
    const offset = new Vector2(-(this.origin.x * this.dimensions.x), -(this.origin.y * this.dimensions.y));

    // Move canvas, rotate, then add origin offset.
    ctx.translate(canvasPosition.x, canvasPosition.y);
    ctx.rotate(this.rotation);
    ctx.translate(offset.x, offset.y);

    this.drawEntity(ctx);

    // Reset transforms
    ctx.setTransform(1, 0, 0, 1, 0, 0);
  }
}
