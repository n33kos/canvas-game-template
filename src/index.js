import { throttle } from 'throttle-debounce';
import Control      from 'Control';

export default class {
  constructor(GameState) {
    this.GameState = GameState;
  }

  // --------Initialization Functions----------
  init() {
    this.setDimensions();
    this.initCanvas();
    this.initAudio();
    this.initControls();
  }

  setDimensions() {
    this.width = window.innerWidth
    || document.documentElement.clientWidth
    || document.body.clientWidth;

    this.height = window.innerHeight
    || document.documentElement.clientHeight
    || document.body.clientHeight;
  }

  initCanvas() {
    let canvas = document.querySelector('canvas');
    canvas.width = this.width;
    canvas.height = this.height;
    this.cx = this.width / 2;
    this.cy = this.height / 2;
    this.GameState.canvas = canvas;

    let ctx = canvas.getContext('2d');
    this.GameState.ctx = ctx;

    this.resizeCanvas();

    window.addEventListener('resize', throttle(200, () => {
      this.setDimensions();
      this.resizeCanvas();
    }));
  }

  resizeCanvas() {
    this.GameState.canvas.width = this.width;
  	this.GameState.canvas.height = this.height;
    this.cx = this.width / 2;
    this.cy = this.height / 2;
  }

  initAudio() {
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    this.GameState.audioContext = audioContext;

    const master = audioContext.createGain();
    master.gain.value = 0.75;
    master.connect(audioContext.destination);
    this.masterAudioNode = master;
  }

  initControls() {
    this.control = new Control(this);
    this.control.init();
  }

  initRender() {
    if (!this.isRunning) {
      this.isRunning = true;
      this.render();
    };
  }


  // --------Gameplay Functions----------

  play() {
    this.loadLevel();
    this.initRender();
    if (this.GameState.isPaused) this.togglePause();
  }

  restart() {
    const response = confirm("Are you sure you want to exit the level?");
    if (response == true) {
      this.endGame();
      this.GameState.UI.setScreen('level');
    }
  }

  togglePause() {
    this.GameState.isPaused = !this.GameState.isPaused;

    //Trigger events on unpause
    if (!this.GameState.isPaused) {
      this.GameState.audioContext.resume();
      this.section.noteTriggers.forEach(trigger => trigger.recalculateEndTime());
    }

    //Trigger events on pause
    if (this.GameState.isPaused) {
      this.GameState.audioContext.suspend();
    }
  }

  calculateDeltaTime() {
    const now = Date.now();
    this.deltaTime = now - this.lastUpdate;
    this.lastUpdate = now;
  }

  endGame() {
    this.level = null;
    this.isRunning = false;
    this.GameState.isPaused = true;
    this.GameState.score = 0;
  }

  // --------------------Renders----------------
  shouldRenderGameplay() {
    return !this.GameState.isPaused;
  }

  render() {
    // Request new frame
    if (this.isRunning) window.requestAnimationFrame(this.render.bind(this));

    // Bail out early
    if(!this.shouldRenderGameplay()) return;

    // Clear screen
    this.GameState.ctx.clearRect(0, 0, this.GameState.canvas.width, this.GameState.canvas.height);

    // Calculations
    this.calculateDeltaTime();

    // Handle Keypresses
    this.control.handlePressedKeys();
  }
}
