import { throttle } from 'throttle-debounce';

export default class {
  constructor(GameState) {
    this.GameState = GameState;
    this.audioContext = null;
    this.masterAudioNode = null;
  }

  init() {
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    this.audioContext = audioContext;

    const master = audioContext.createGain();
    master.gain.value = 0.75;
    master.connect(audioContext.destination);
    this.masterAudioNode = master;
  }
}
