import ColorCube   from 'entities/ColorCube';
import Level       from 'class/Level';
import randomRange from 'lib/randomRange';
import Vector2     from 'class/Vector2';

export default class extends Level {
  constructor() {
    super();

    this.name = "Color Cubes";
  }

  load(GameState) {
    GameState.Scene.clear();

    for (var i = 0; i < 10; i++) {
      const cube = new ColorCube({
        GameState,
        color: `rgb(${Math.random()*255},${Math.random()*255},${Math.random()*255})`,
        position: new Vector2(
          randomRange(-GameState.Canvas.cx, GameState.Canvas.cx),
          randomRange(-GameState.Canvas.cy, GameState.Canvas.cy),
        ),
        dimensions: new Vector2(50, 50),
      });
      GameState.Scene.add(cube);
    }
  }
}
