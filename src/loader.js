import Audio     from 'class/Audio';
import Canvas    from 'class/Canvas';
import Controls  from 'class/Controls';
import GameState from 'class/GameState';
import Render    from 'class/Render';
import Scene     from 'class/Scene';
import UI        from 'class/UI';
import Update    from 'class/Update';

const newGame = {
  Audio,
  Canvas,
  Controls,
  GameState,
  Render,
  Scene,
  UI,
  Update,
}

document.addEventListener("DOMContentLoaded", (e) => {
  const GameState = new newGame.GameState();
  GameState.init();

  // Audio needs to be initialized after user input, refer to UI class for init() call
  GameState.Audio = new newGame.Audio(GameState);

  GameState.Canvas = new newGame.Canvas(GameState);
  GameState.Canvas.init();

  GameState.Controls = new newGame.Controls(GameState);
  GameState.Controls.init();

  GameState.Scene = new newGame.Scene(GameState);
  GameState.Scene.init();

  GameState.Render = new newGame.Render(GameState);
  GameState.Render.init();

  GameState.Update = new newGame.Update(GameState);
  GameState.Update.init();

  GameState.UI = new newGame.UI(GameState);
  GameState.UI.init();
});
