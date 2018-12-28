import Level       from 'class/Level';
import randomRange from 'lib/randomRange';
import Vector2     from 'class/Vector2';
import Cell        from 'gameObjects/examples/Cell';

export default class extends Level {
  constructor(config) {
    super(config);

    this.name = "Grid";
  }

  load() {
    this.GameState.Scene.clear();

    this.grid = [];
    this.rows = 8;
    this.columns = 6;
    this.minDimension = Math.min(
      this.GameState.Canvas.width,
      this.GameState.Canvas.height,
    );
    this.minimumPadding = 200;
    this.cellSize = (this.minDimension - this.minimumPadding) / this.rows;
    this.padding = new Vector2(
      (this.GameState.Canvas.width - this.cellSize * this.rows) / 2,
      (this.GameState.Canvas.height - this.cellSize * this.columns) / 2,
    );

    for (let y = 0; y < this.columns; y++) {
      for (let x = 0; x < this.rows; x++) {
        const cell = new Cell({
          GameState: this.GameState,
          strokeStyle: '#ccc',
          fillStyle: 'white',
          lineWidth: 2,
          dimensions: new Vector2(this.cellSize, this.cellSize),
          id: `${x}_${y}`,
          x: x,
          y: y,
        });
        cell.position = new Vector2(
          (x * this.cellSize) + this.padding.x,
          (y * this.cellSize) + this.padding.y,
        );

        this.GameState.Scene.add(cell);
        this.grid.push(cell);
      }
    }

    this.GameState.Scene.gameObjects.forEach( cell => {
      cell.init(this.GameState.Scene.gameObjects);
    });


    this.addControlsCallback('mouseUp', this.handleClick.bind(this));
  }

  handleClick(e) {
    const clickedCell = this.getClickedCell(this.GameState.Controls.lastPosition);
    if (clickedCell) clickedCell.rotateCell(1);
  }

  getClickedCell(position) {
    const x = Math.floor((position.x - this.padding.x) / this.cellSize);
    const y = Math.floor((position.y - this.padding.y) / this.cellSize);
    return this.grid.find(cell => cell.id === `${x}_${y}`);
  }
}
