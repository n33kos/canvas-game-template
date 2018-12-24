/*
  Example sprites sourced from : https://jesse-m.itch.io/jungle-pack
*/

import Background  from 'class/Background';
import Level       from 'class/Level';
import randomRange from 'lib/randomRange';
import RunningMan  from 'gameObjects/RunningMan';
import Vector2     from 'class/Vector2';

export default class extends Level {
  constructor(config) {
    super(config);

    this.name = "Sprites";
  }

  load() {
    this.GameState.Scene.clear();

    this.addGround();
    this.addCharacter();
  }

  addCharacter() {
    const runner = new RunningMan({
      GameState: this.GameState,
      dimensions: new Vector2(21, 32),
      origin: new Vector2(0.5, 1),
      scale: new Vector2(10, 10),
      initialheight: -this.GameState.Canvas.cy + 285,
    });
    runner.setPosition(new Vector2(0, -this.GameState.Canvas.cy + 320));
    runner.load();
    this.GameState.Scene.add(runner);
  }

  addGround() {
    const ground = new Background({
      GameState: this.GameState,
      origin: new Vector2(0, 0),
      dimensions: new Vector2(this.GameState.Canvas.width, 32),
      position: new Vector2(-this.GameState.Canvas.cx, -this.GameState.Canvas.cy + 320),
      imageUrl: './img/ground.png',
      repeat: 'repeat-x',
      scale: new Vector2(10, 10),
    });
    ground.load();
    this.GameState.Scene.add(ground);
  }

  gameLogic() {
    // Override this function to add level specific game logic
  }
}
