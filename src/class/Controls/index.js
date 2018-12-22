import { throttle } from 'throttle-debounce';

export default class {
  constructor(GameState) {
    this.GameState = GameState;
    this.isMouseDown = false;
    this.oldPosition = 0;
    this.pressedKeys = [];
    this.debounceValue = 10;
  }

  init() {
    // Mouse
    document.addEventListener("mousemove", throttle(this.debounceValue, (e) => this.handleMouseMove(e)));
    document.addEventListener("mousedown", this.handleMouseDown);
    document.addEventListener("mouseup", e => { this.isMouseDown = false; });

    // Touch
    document.addEventListener('touchmove', throttle(this.debounceValue, (e) => this.handleTouchMove(e)));
    document.addEventListener('touchstart', this.handleTouchStart);
    document.addEventListener("touchend", e => { this.isMouseDown = false; });

    // Keys
    document.onkeydown = this.handleKeyDown.bind(this);
    document.onkeyup = this.handleKeyUp.bind(this);
  }

  handleTouchStart(e) {
    this.isMouseDown = true;
    this.oldPosition = e.targetTouches[0].clientX;
  }

  handleTouchMove(e) {
    e.preventDefault();
    if (!this.isMouseDown || this.GameState.isPaused) return;

    for (let i=0; i < e.targetTouches.length; i++) {
      // Do something here with position
      this.oldPosition = e.targetTouches[i].clientX;
    }
  }

  handleMouseDown(e) {
    this.isMouseDown = true;
    this.oldPosition = e.clientX;
  }

  handleMouseMove(e) {
    if (!this.isMouseDown || this.GameState.isPaused) return;

    // Do something here with position
    this.oldPosition = e.clientX;
  }

  handleKeyDown(e) {
    if (!this.pressedKeys.includes(e.keyCode)) this.pressedKeys.push(e.keyCode);
  }

  handleKeyUp(e) {
    const index = this.pressedKeys.indexOf(e.keyCode);
    if (index > -1) this.pressedKeys.splice(index, 1);
  }

  handlePressedKeys() {
    // left arrow
    if (this.pressedKeys.includes(37)) {
    }
    // right arrow
    if (this.pressedKeys.includes(39)) {
    }
  }
}
