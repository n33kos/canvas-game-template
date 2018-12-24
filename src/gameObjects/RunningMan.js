import Sprite  from 'class/Sprite';
import Vector2 from 'class/Vector2';
import {
  LEFT_ARROW,
  RIGHT_ARROW,
  UP_ARROW,
} from 'constants/keyCodes';

export default class extends Sprite {
  constructor(config) {
    super(config);

    this.moveSpeed = 6;
    this.animations = {
      idle : {
        spriteSheet   : './img/idle.png',
        frames        : 12,
        ticksPerFrame : 4,
      },
      run : {
        spriteSheet   : './img/run.png',
        frames        : 8,
        ticksPerFrame : 4,
      },
      jump : {
        spriteSheet   : './img/jump.png',
        frames        : 4,
        ticksPerFrame : 12,
      },
    };
    this.initialHeight = config.initialheight;
    this.yVelocity = 0;
  }

  update() {
    this.handleControls();
  }

  handleControls() {
    const tempPos = new Vector2(this.position.x, this.position.y);
    this.currentAnimation = 'idle';

    if (this.GameState.Controls.pressedKeys.includes(LEFT_ARROW)) {
      this.currentAnimation = 'run';

      if (this.position.x > -(this.GameState.Canvas.cx - this.offset.x)) {
        this.mirrorX = true;
        tempPos.x -= this.moveSpeed;
      }
    }

    if (this.GameState.Controls.pressedKeys.includes(RIGHT_ARROW)) {
      this.currentAnimation = 'run';

      if (this.position.x < (this.GameState.Canvas.cx + this.offset.x)) {
        this.mirrorX = false;
        tempPos.x += this.moveSpeed;
      }
    }

    if (this.position.y > this.initialHeight) {
      this.currentAnimation = 'jump';
      this.yVelocity -= 1;
    }
    if (this.position.y < this.initialHeight) {
      this.yVelocity = 0;
    }
    if (this.GameState.Controls.pressedKeys.includes(UP_ARROW) && this.position.y <= this.initialHeight) {
      this.yVelocity = 30;
    }
    tempPos.y += this.yVelocity;

    this.setPosition(tempPos);
  }
}
