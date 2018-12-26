import Level       from 'class/Level';
import randomRange from 'lib/randomRange';
import Vector2     from 'class/Vector2';
import Cell        from 'gameObjects/Cell';

export default class extends Level {
  constructor(config) {
    super(config);

    this.name = "Grid";
  }

  load() {
    this.GameState.Scene.clear();
    this.audioNodes = [];

    const cellSize = this.GameState.Canvas.width / 8;
    const xScale = Math.floor(this.GameState.Canvas.width / cellSize);
    const yScale = Math.floor(this.GameState.Canvas.height / cellSize);

    for (let y = 0; y <= yScale; y++) {
      for (let x = 0; x <= xScale; x++) {
        const cell = new Cell({
          GameState: this.GameState,
          strokeStyle: 'gray',
          lineWidth: 2,
          dimensions: new Vector2(cellSize, cellSize),
          id: `${x}_${y}`,
          x: x,
          y: y,
        });
        cell.position = new Vector2(
          (x * cellSize),
          (y * cellSize),
        );

        this.GameState.Scene.add(cell);
      }
    }

    this.GameState.Scene.entities = this.GameState.Scene.entities.reverse();

    this.GameState.Scene.entities.forEach( cell => {
      cell.init(this.GameState.Scene.entities);
    });

  }

  gameLogic() {
    // Override this function to add level specific game logic
  }
}
