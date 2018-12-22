const uuidv4 = require('uuid/v4');
import Entity from 'class/Entity';

export default class {
  constructor(GameState) {
    this.Gamestate = GameState;
    this.entities = [];
  }

  init() {
    // Nothing here yet
  }

  add(entity) {
    entity.uuid = uuidv4();
    this.entities.push(entity);
  }

  remove(uuid) {
    this.entities = this.entities.filter(el => el.uuid !== uuid);
  }

  clearScene() {
    this.entities = [];
  }
}
