import * as defaultConfig from 'config/gameState';
import Level              from 'class/Level';
import levels             from 'config/levels';

export default class {
  constructor() {
    this.canvas = null;
    this.deltaTime = 1;
    this.isPaused = true;
    this.level = 0;
    this.levels = [];
    this.score = 0;
    this.playerName = defaultConfig.playerName;
    this.currentLevel = new Level({ GameState: this });

    /*
      Class variables added in loader :
      - this.Audio
      - this.UI
      - this.Controls
      - this.Canvas
      - this.Scene
      - this.Render
    */
  }

  init() {
    this.levels = levels;
    this.initLevels();
  }

  initLevels() {
    this.levels = this.levels.map(level => {
      const lvl = new level();
      lvl.init(this);
      return lvl;
    });
  }

  loadLevel() {
    const newLevel = this.levels[this.level];

    // unload level if one was already loaded
    if (this.currentLevel) this.currentLevel.unLoad();

    // load level
    newLevel.load();
    this.currentLevel = newLevel;

    // Remove focus from any UI elements clicked to prevent control misdirection
    document.activeElement.blur();
  }

  play() {
    this.isPaused = false;
    this.loadLevel();
  }

  restart() {
    const response = confirm("Are you sure you want to exit the level?");
    if (response == true) {
      this.endGame();
      this.UI.setScreen('level');
      this.currentLevel.audioNodes.forEach(audioNode => {
        audioNode.stop(0);
      });
    }
  }

  togglePause() {
    this.isPaused = !this.isPaused;

    //Trigger events on unpause
    if (this.isPaused) {
      this.Audio.audioContext.resume();
    }

    //Trigger events on pause
    if (!this.isPaused) {
      this.Audio.audioContext.suspend();
    }
  }

  endGame() {
    this.level = 0;
    this.isRunning = false;
    this.isPaused = true;
    this.score = 0;
  }
}
