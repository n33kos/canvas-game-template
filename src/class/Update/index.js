export default class {
  constructor(GameState) {
    this.GameState = GameState;
    this.isRunning = false;
    this.lastUpdate = Date.now();
    this.updateRate = 10;
  }

  init() {
    if (!this.isRunning) {
      this.isRunning = true;
      this.update();
    };
  }

  calculateDeltaTime() {
    const now = Date.now();
    this.GameState.deltaTime = now - this.lastUpdate;
    this.lastUpdate = now;
  }

  shouldUpdate() {
    return !this.GameState.isPaused;
  }

  update() {
    // Request new frame
    if (this.isRunning) window.setTimeout(this.update.bind(this), this.updateRate);

    // Bail out early
    if(!this.shouldUpdate()) return;

    // Handle Keypresses
    this.GameState.Controls.handlePressedKeys();

    // Calculations
    this.calculateDeltaTime();
  }
}
