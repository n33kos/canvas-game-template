import Audio     from 'class/Audio';
import Canvas    from 'class/Canvas';
import Controls  from 'class/Controls';
import GameState from 'class/GameState';
import Renderer  from 'class/Renderer';
import Scene     from 'class/Scene';
import UI        from 'class/UI';

const newGame = {
  Audio,
  Canvas,
  Controls,
  GameState,
  Renderer,
  Scene,
  UI,
}

document.addEventListener("DOMContentLoaded", (e) => {
  const GameState = new newGame.GameState();

  GameState.Audio = new newGame.Audio(GameState);
  GameState.Audio.init();

  GameState.UI = new newGame.UI(GameState);
  GameState.UI.init();

  GameState.Controls = new newGame.Controls(GameState);
  GameState.Controls.init();

  GameState.Canvas = new newGame.Canvas(GameState);
  GameState.Canvas.init();

  GameState.Scene = new newGame.Scene(GameState);
  GameState.Scene.init();

  GameState.Renderer = new newGame.Renderer(GameState);
  GameState.Renderer.init();
});
