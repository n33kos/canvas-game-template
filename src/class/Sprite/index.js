import Entity  from 'class/Entity';
import Vector2 from 'class/Vector2';

export default class extends Entity {
  constructor(config) {
    super(config);

    const {
      animations,
      currentFrame = 1,
      currentAnimation = null,
      mirrorX = false,
      mirrorY = false,
      scale = new Vector2(1, 1),
    } = config;

    this.animations = animations;
    this.currentAnimation = currentAnimation;
    this.currentFrame = currentFrame;
    this.scale = scale;
    this.mirrorX = mirrorX;
    this.mirrorY = mirrorY;

    this.lastAnimation = null;
    this.tickCounter = 0
  }

  load() {
    Object.keys(this.animations).forEach(animation => {
      const img = new Image();
      img.src = this.animations[animation].spriteSheet;
      this.animations[animation].image = img;
    });
  }

  calculateOffset() {
    if (!this.scale) return;
    this.offset = new Vector2(
      -(this.origin.x * this.dimensions.x * this.scale.x * (this.mirrorX ? -1 : 1)),
      -(this.origin.y * this.dimensions.y * this.scale.y * (this.mirrorY ? -1 : 1)),
    );
  }

  draw() {
    if (!this.animations[this.currentAnimation]) return;

    this.handleFrames();

    if (this.mirrorX || this.mirrorY) {
      // No need to reset canvas transforms, Entity class handles that
      this.GameState.Canvas.ctx.scale(
        this.mirrorX ? -1 : 1,
        this.mirrorY ? -1 : 1,
      );
    }

    this.GameState.Canvas.ctx.drawImage(
      this.animations[this.currentAnimation].image,
      this.currentFrame * this.dimensions.x,
      0,
      this.dimensions.x,
      this.dimensions.y,
      0,
      0,
      this.dimensions.x * this.scale.x,
      this.dimensions.y * this.scale.y,
    );
  }

  handleFrames() {
    // repeat animations
    this.tickCounter++;
    if (this.tickCounter > this.animations[this.currentAnimation].ticksPerFrame) {
      this.tickCounter = 0;
      this.currentFrame += 1;
      if (this.currentFrame >= this.animations[this.currentAnimation].frames) this.currentFrame = 1;
    }

    // Reset to first frame on animation switch
    if (this.lastAnimation !== this.currentAnimation) {
      this.lastAnimation = this.currentAnimation;
      this.currentFrame = 1;
    }
  }
}
