export default class {
  constructor(GameState) {
    this.GameState = GameState;
    this.isRunning = false;
    this.lastUpdate = Date.now();
  }

  init() {
    if (!this.isRunning) {
      this.isRunning = true;
      this.render();
    };
  }

  calculateDeltaTime() {
    const now = Date.now();
    this.GameState.deltaTime = now - this.lastUpdate;
    this.lastUpdate = now;
  }

  shouldRender() {
    return !this.GameState.isPaused;
  }

  render() {
    // Request new frame
    if (this.isRunning) window.requestAnimationFrame(this.render.bind(this));

    // Bail out early
    if(!this.shouldRender()) return;

    // Clear screen
    this.GameState.Canvas.clear();

    // Calculations
    this.calculateDeltaTime();

    // Handle Keypresses
    this.GameState.Controls.handlePressedKeys();

    // Draw Entities
    this.GameState.Scene.entities.forEach(
      entity => {
        entity.draw(this.GameState.Canvas.ctx);
      }
    );
  }
}
