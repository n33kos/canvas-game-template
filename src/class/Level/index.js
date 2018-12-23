export default class {
  constructor() {
    this.isLoaded = false;
  }

  init(GameState) {
    this.GameState = GameState;
  }

  load() {
    this.isLoaded = true;
  }
}
