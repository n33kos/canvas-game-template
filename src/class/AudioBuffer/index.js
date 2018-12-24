export default class {
  constructor({
    audioFileUrl,
    GameState,
    shouldLoop,
  }) {
    this.audioFileUrl = audioFileUrl;
    this.GameState = GameState;
    this.shouldLoop = shouldLoop;

    this.audioNode = null;
    this.buffer = null;
  }

  load(callback) {
    const req = new XMLHttpRequest();
    req.responseType = "arraybuffer";
    req.onload = () => {
      this.createBufferFromData(req.response);
      callback();
    }
    req.onerror = () => {
      callback();
    }
    req.open('GET', this.audioFileUrl, true);
    req.send();
  }

  createBufferFromData(data) {
    this.GameState.Audio.audioContext.decodeAudioData(data, (buffer) => {
      this.buffer = buffer;
    });
  }

  play() {
    this.audioNode = this.GameState.Audio.audioContext.createBufferSource();
    this.audioNode.buffer = this.buffer;
    this.audioNode.connect(this.GameState.Audio.masterAudioNode);
    this.audioNode.loop = this.shouldLoop;
    this.audioNode.start();
  }

  stop() {
    this.audioNode.stop(0);
  }
}
