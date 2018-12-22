export default class {
  constructor(GameState) {
    this.GameState = GameState;
    this.screens = document.querySelectorAll('[data-screen]');
    this.buttons = {
      mute        : document.querySelectorAll('[data-nav="mute"]'),
      quit        : document.querySelectorAll('[data-nav="quit"]'),
      screens     : document.querySelectorAll('[data-target-screen]'),
      play        : document.querySelectorAll('[data-gamestate-play]'),
      pause       : document.querySelectorAll('[data-gamestate-pause]'),
      restart     : document.querySelectorAll('[data-gamestate-restart]'),
      fullscreen  : document.querySelectorAll('[data-nav="fullscreen"]'),
      level       : document.querySelectorAll('[data-gamestate-change-level]'),
    };
    this.isFullscreen = false;
  }

  init() {
    this.initListenters();
    this.setScreen('mainmenu');
  }

  initListenters() {
    // Play buttons
    Array.from(this.buttons.play).forEach(button => {
      button.addEventListener('click', () => this.GameState.play() );
    });

    // Pause buttons
    Array.from(this.buttons.pause).forEach(button => {
      button.addEventListener('click', () => this.GameState.togglePause() );
    });

    // Restart Buttons
    Array.from(this.buttons.restart).forEach(button => {
      button.addEventListener('click', () => this.GameState.restart() );
    });

    //Fullscreen buttons
    Array.from(this.buttons.fullscreen).forEach(button => {
      button.addEventListener('click', () => this.toggleFullscreen() );
    });

    //Level selection buttons
    Array.from(this.buttons.level).forEach(button => {
      button.addEventListener('click', (e) => {
        this.GameState.level += parseInt(e.target.dataset.gamestateChangeLevel, 10);
        if (this.GameState.level >= this.GameState.levels.length) this.GameState.level = 0;
        if (this.GameState.level < 0) this.GameState.level = this.GameState.levels.length;

        this.updateLevel(this.GameState.levels[this.GameState.level]);
      });
    });

    // Quit buttons
    Array.from(this.buttons.quit).forEach(button => {
      button.addEventListener('click', () => window.close() );
    });

    // Mute Buttons
    Array.from(this.buttons.mute).forEach(button => {
      button.addEventListener('click', (e) => {

        const audioCtx = this.GameState.Audio.audioContext;

        if(audioCtx.state === 'running') {
          audioCtx.suspend().then(function() {
            e.target.innerHTML = 'Resume';
          });
        } else if(audioCtx.state === 'suspended') {
          audioCtx.resume().then(function() {
            e.target.innerHTML = 'Mute';
          });
        }
      });
    });

    // UI Screen Transitions
    Array.from(this.buttons.screens).forEach(button => {
      button.addEventListener('click', this.initTransitions.bind(this));
    });
  }

  initTransitions(e) {
    this.setScreen(e.target.dataset.targetScreen);
  }

  setScreen(screenToSet) {
    Array.from(this.screens).forEach(screen => {
      if (screen.dataset.screen === screenToSet) {
        screen.classList.add('active');
      } else {
        screen.classList.remove('active');
      }
    });
  }

  toggleFullscreen() {
    const elem = document.documentElement;

    /* View in fullscreen */
    if(!this.isFullscreen) {
      if (elem.requestFullscreen) {
        elem.requestFullscreen();
      } else if (elem.mozRequestFullScreen) { /* Firefox */
        elem.mozRequestFullScreen();
      } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
        elem.webkitRequestFullscreen();
      } else if (elem.msRequestFullscreen) { /* IE/Edge */
        elem.msRequestFullscreen();
      }
    }

    /* Close fullscreen */
    if(this.isFullscreen) {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.mozCancelFullScreen) { /* Firefox */
        document.mozCancelFullScreen();
      } else if (document.webkitExitFullscreen) { /* Chrome, Safari and Opera */
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) { /* IE/Edge */
        document.msExitFullscreen();
      }
    }

    this.isFullscreen = !this.isFullscreen;
  }

  updateScore(score) {
    const scores = document.querySelectorAll('[data-ui="score"]');
    Array.from(scores).forEach(scoreElement => {
      scoreElement.innerHTML = score;
    });
  }

  updateLevel(level) {
    if (!level) return;

    Array.from(document.querySelectorAll('[data-ui="level"]')).forEach(levelElement => {
      levelElement.innerHTML = level.name;
    });
  }
}
