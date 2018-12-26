import { throttle } from 'throttle-debounce';
import Vector2      from 'class/Vector2';

export default class {
  constructor(GameState) {
    this.GameState = GameState;
    this.isMouseDown = false;
    this.lastPosition = null;
    this.pressedKeys = [];
    this.debounceValue = 10;
  }

  init() {
    // Mouse
    document.addEventListener("mousemove", throttle(this.debounceValue, (e) => this.handleMouseMove(e)));
    document.addEventListener("mousedown", (e) => this.handleMouseDown(e));
    document.addEventListener("mouseup", (e) => this.handleMouseUp(e));

    // Touch
    document.addEventListener('touchmove', throttle(this.debounceValue, (e) => this.handleTouchMove(e)));
    document.addEventListener('touchstart', (e) => this.handleTouchStart(e));
    document.addEventListener("touchend", (e) => this.handleTouchEnd(e));

    // Keys
    document.onkeydown = this.handleKeyDown.bind(this);
    document.onkeyup = this.handleKeyUp.bind(this);
  }

  // -----Touch-----
  handleTouchStart(e) {
    this.setLastPosition(e);
    this.isMouseDown = true;
  }

  handleTouchEnd(e) {
    this.setLastPosition(e);
    this.isMouseDown = false;
  }

  handleTouchMove(e) {
    e.preventDefault();
    if (!this.isMouseDown || this.GameState.isPaused) return;
    this.setLastPosition(e);
  }

  // -----Mouse-----
  handleMouseDown(e) {
    this.setLastPosition(e);
    this.isMouseDown = true;
  }

  handleMouseUp(e) {
    this.setLastPosition(e);
    this.isMouseDown = false;
  }

  handleMouseMove(e) {
    if (!this.isMouseDown || this.GameState.isPaused) return;
    this.setLastPosition(e);
  }

  // -----Keypresses------
  handleKeyDown(e) {
    if (!this.pressedKeys.includes(e.keyCode)) this.pressedKeys.push(e.keyCode);
  }

  handleKeyUp(e) {
    const index = this.pressedKeys.indexOf(e.keyCode);
    if (index > -1) this.pressedKeys.splice(index, 1);
  }

  setLastPosition(e) {
    if ('clientX' in e) {
      this.lastPosition = new Vector2(
        e.clientX * this.GameState.Canvas.scale,
        e.clientY * this.GameState.Canvas.scale,
      );
    }

    if ('targetTouches' in e) {
      this.lastPosition = new Vector2(
        e.targetTouches[0].clientX * this.GameState.Canvas.scale,
        e.targetTouches[0].clientY * this.GameState.Canvas.scale,
      );
    }
  }
}
