import AudioBuffer from 'AudioBuffer';

export default class {
  constructor() {
    this.isLoaded = false;
  }

  load() {
    this.isLoaded = true;
    console.log('level loaded');
  }
}
