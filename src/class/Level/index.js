export default class {
  constructor() {
    this.name = 'Default Level';
    this.audioNodes = [];
    this.controlCallbackIds = [];
  }

  init(GameState) {
    this.GameState = GameState;
  }

  load() {
  }

  unLoad() {
  }

  gameLogic() {
    // Override this function to add level specific game logic
  }
}
