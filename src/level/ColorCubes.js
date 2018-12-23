import ColorCube   from 'entity/ColorCube';
import Level       from 'class/Level';
import randomRange from 'lib/randomRange';
import Vector2     from 'class/Vector2';

export default class extends Level {
  constructor(config) {
    super(config);

    this.name = "Color Cubes";
  }

  load() {
    this.GameState.Scene.clear();

    for (var i = 0; i < 100; i++) {
      const cube = new ColorCube({
        GameState: this.GameState,
        color: `rgb(${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)})`,
        position: new Vector2(
          randomRange(-this.GameState.Canvas.cx, this.GameState.Canvas.cx),
          randomRange(-this.GameState.Canvas.cy, this.GameState.Canvas.cy),
        ),
        dimensions: new Vector2(30, 30),
      });

      this.GameState.Scene.add(cube);
    }
  }

  gameLogic() {

  }
}
