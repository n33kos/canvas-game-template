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
    document.addEventListener("mouseup", e => { this.isMouseDown = false; });

    // Touch
    document.addEventListener('touchmove', throttle(this.debounceValue, (e) => this.handleTouchMove(e)));
    document.addEventListener('touchstart', (e) => this.handleTouchStart(e));
    document.addEventListener("touchend", e => { this.isMouseDown = false; });

    // Keys
    document.onkeydown = this.handleKeyDown.bind(this);
    document.onkeyup = this.handleKeyUp.bind(this);
  }

  handleTouchStart(e) {
    this.isMouseDown = true;

    this.lastPosition = new Vector2(e.targetTouches[0].clientX, e.targetTouches[0].clientY);
  }

  handleTouchMove(e) {
    e.preventDefault();
    if (!this.isMouseDown || this.GameState.isPaused) return;

    this.lastPosition = new Vector2(e.targetTouches[0].clientX, e.targetTouches[0].clientY);
  }

  handleMouseDown(e) {
    this.isMouseDown = true;

    this.lastPosition = new Vector2(e.clientX, e.clientY);
  }

  handleMouseMove(e) {
    if (!this.isMouseDown || this.GameState.isPaused) return;

    this.lastPosition = new Vector2(e.clientX, e.clientY);
  }

  handleKeyDown(e) {
    if (!this.pressedKeys.includes(e.keyCode)) this.pressedKeys.push(e.keyCode);
  }

  handleKeyUp(e) {
    const index = this.pressedKeys.indexOf(e.keyCode);
    if (index > -1) this.pressedKeys.splice(index, 1);
  }
}
