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

    // These vars will be calculated via setPosition
    this.canvasPosition = new Vector2();
    this.offset = new Vector2();
    this.setPosition(position);
  }

  setPosition(position) {
    this.position = position;
    this.canvasPosition = worldSpaceToCanvas(this.GameState, this.position);
    this.offset = new Vector2(
      -(this.origin.x * this.dimensions.x),
      -(this.origin.y * this.dimensions.y)
    );
  }

  drawEntity() {
    // Move canvas, rotate, then add origin offset.
    this.GameState.Canvas.ctx.translate(this.canvasPosition.x, this.canvasPosition.y);
    this.GameState.Canvas.ctx.rotate(this.rotation);
    this.GameState.Canvas.ctx.translate(this.offset.x, this.offset.y);

    this.draw();

    // Reset transforms
    this.GameState.Canvas.ctx.setTransform(1, 0, 0, 1, 0, 0);
  }

  update() {
    // Override this function for the entity's update loop
  }

  draw() {
    // Override this function for the entity's draw loop
  }
}
