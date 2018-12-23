import { throttle } from 'throttle-debounce';

export default class {
  constructor(GameState) {
    this.GameState = GameState;
    this.cx = null;
    this.cy = null;
    this.canvas = null;
    this.ctx = null;
  }

  init() {
    this.setDimensions();
    this.initCanvas();
  }

  setDimensions() {
    this.width = (
      window.innerWidth
      || document.documentElement.clientWidth
      || document.body.clientWidth
    ) * window.devicePixelRatio;

    this.height = (
      window.innerHeight
      || document.documentElement.clientHeight
      || document.body.clientHeight
    ) * window.devicePixelRatio;
  }

  initCanvas() {
    let canvas = document.querySelector('canvas');
    canvas.width = this.width;
    canvas.height = this.height;
    this.cx = this.width / 2;
    this.cy = this.height / 2;
    this.canvas = canvas;

    let ctx = canvas.getContext('2d');
    this.ctx = ctx;

    this.resizeCanvas();

    window.addEventListener('resize', throttle(1000, () => {
      this.setDimensions();
      this.resizeCanvas();
    }));
  }

  resizeCanvas() {
    this.canvas.width = this.width;
  	this.canvas.height = this.height;
    this.cx = this.width / 2;
    this.cy = this.height / 2;
  }

  clear() {
    this.ctx.clearRect(0, 0, this.width, this.height);
  }
}
