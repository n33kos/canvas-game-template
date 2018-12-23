import Audio     from 'class/Audio';
import Canvas    from 'class/Canvas';
import Controls  from 'class/Controls';
import GameState from 'class/GameState';
import Render    from 'class/Render';
import Scene     from 'class/Scene';
import UI        from 'class/UI';

const newGame = {
  Audio,
  Canvas,
  Controls,
  GameState,
  Render,
  Scene,
  UI,
}

document.addEventListener("DOMContentLoaded", (e) => {
  const GameState = new newGame.GameState();
  GameState.init();

  GameState.Audio = new newGame.Audio(GameState);
  GameState.Audio.init();

  GameState.Controls = new newGame.Controls(GameState);
  GameState.Controls.init();

  GameState.Canvas = new newGame.Canvas(GameState);
  GameState.Canvas.init();

  GameState.Scene = new newGame.Scene(GameState);
  GameState.Scene.init();

  GameState.Render = new newGame.Render(GameState);
  GameState.Render.init();

  GameState.UI = new newGame.UI(GameState);
  GameState.UI.init();
});
