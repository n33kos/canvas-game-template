import Game      from 'index';
import GameState from 'GameState';
import UI        from 'UI';

const newGame = {
  Game,
  GameState,
  UI,
}

document.addEventListener("DOMContentLoaded", function(event) {
  const GameState = new newGame.GameState();

  GameState.Game = new newGame.Game(GameState);
  GameState.Game.init();

  GameState.UI = new newGame.UI(GameState);
  GameState.UI.init();
});
