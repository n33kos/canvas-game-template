import AudioBuffer      from 'class/AudioBuffer';
import Background       from 'class/Background';
import Level            from 'class/Level';
import NonLoopingSprite from 'gameObjects/examples/NonLoopingSprite';
import randomRange      from 'lib/randomRange';
import RunningMan       from 'gameObjects/examples/RunningMan';
import Vector2          from 'class/Vector2';
import SpriteButton     from 'class/SpriteButton';

export default class extends Level {
  constructor(config) {
    super(config);

    this.name = "Sprites";
  }

  load() {
    this.GameState.Scene.clear();

    this.addBGMusic();
    this.addGround();
    this.addCharacter();
    this.addNonLoopingSprite();
    this.addSpriteButton();
  }

  addBGMusic() {
    const audioNode = new AudioBuffer({
      audioFileUrl : './audio/examples/bg.mp3',
      autoPlay     : true,
      GameState    : this.GameState,
      shouldLoop   : true,
    });
    this.addAudioNode(audioNode);
  }

  addCharacter() {
    const runner = new RunningMan({
      GameState: this.GameState,
      dimensions: new Vector2(21, 32),
      offset: new Vector2(0.5, 1),
      scale: new Vector2(10, 10),
      initialheight: -this.GameState.Canvas.cy + 285,
    });
    runner.setPosition(new Vector2(0, -this.GameState.Canvas.cy + 320));
    this.GameState.Scene.add(runner);
  }

  addNonLoopingSprite() {
    const nonlooper = new NonLoopingSprite({
      GameState: this.GameState,
      dimensions: new Vector2(32, 32),
      scale: new Vector2(10, 10),
    });
    this.GameState.Scene.add(nonlooper);
  }

  addSpriteButton() {
    const spriteButton = new SpriteButton({
      GameState: this.GameState,
      dimensions: new Vector2(32, 32),
      scale: new Vector2(3, 3),
      position: new Vector2(0, 200),
      mouseDownSprite: './img/examples/downButton.png',
      mouseUpSprite: './img/examples/upButton.png',
      callback: () => { alert('clicked a button'); },
    });
    this.GameState.Scene.add(spriteButton);
  }

  addGround() {
    const ground = new Background({
      GameState: this.GameState,
      offset: new Vector2(0, 0),
      dimensions: new Vector2(this.GameState.Canvas.width, 32),
      position: new Vector2(-this.GameState.Canvas.cx, -this.GameState.Canvas.cy + 320),
      imageUrl: './img/examples/ground.png',
      repeat: 'repeat-x',
      scale: new Vector2(10, 10),
    });
    this.GameState.Scene.add(ground);
  }
}
