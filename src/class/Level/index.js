export default class {
  constructor() {
    this.isLoaded = false;
    this.audioNodes = [];
  }

  init(GameState) {
    this.GameState = GameState;
  }

  load() {
    this.isLoaded = true;
  }

  gameLogic() {
    // Override this function to add level specific game logic
  }
}
