import * as defaultConfig from 'config/defaultConfig';
import levels             from 'config/levels';

export default class {
  constructor() {
    this.audioContext = null;
    this.canvas = null;
    this.deltaTime = 1;
    this.isPaused = false;
    this.level = 0;
    this.levels = [];
    this.score = 0;
    this.playerName = defaultConfig.playerName;
    /*
      Class variables added in loader :
      - this.Audio
      - this.UI
      - this.Controls
      - this.Canvas
      - this.Scene
      - this.Renderer
    */
  }

  init() {
    this.levels = levels;
  }

  play() {
    this.loadLevel();
    if (this.isPaused) this.togglePause();
  }

  restart() {
    const response = confirm("Are you sure you want to exit the level?");
    if (response == true) {
      this.endGame();
      this.UI.setScreen('level');
    }
  }

  togglePause() {
    this.isPaused = !this.isPaused;

    //Trigger events on unpause
    if (this.isPaused) {
      this.Audio.audioContext.resume();
    }

    //Trigger events on pause
    if (this.isPaused) {
      this.Audio.audioContext.suspend();
    }
  }

  endGame() {
    this.level = 0;
    this.isRunning = false;
    this.isPaused = true;
    this.score = 0;
  }

  loadLevel() {
    const levelClass = this.levels[this.level].const;
    const level = new levelClass();
    level.load(this);
  }
}
