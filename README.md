# canvas-game-template
A template for quick-starting HTML canvas games.

# Setup
- Run `npm install`
- Find and replace `newGame` with your game's name
- Delete or repurpose example gameObjects and levels
- Make a great game!

# Usage
Please forgive the haphazard nature of this documentation. It is inteded mostly as a reminder to myself regarding what kind of design patterns are used. It isn't intended to be an exhaustive description of features.

### UI
The user interface is implemented with html and css. All UI screens live in `index.html` as individual elements within the `UserInterface` div. The `UI` class handles all interaction and (by default) updates the value of score and level elements.

```
<div class="UserInterface">
  <div data-screen="mainmenu" data-gamestate-init-audio>
    <button data-ui-target-screen="level">Play</button>
    <button data-ui-target-screen="about">About</button>
  </div>
</div>
```

- Each screen's name is defined in the `data-screen` attribute, so in the above example the screen is named `mainmenu`.
- To transition from one screen to another, include `data-ui-target-screen="screenname"` on an element. Clicks on this element will transition to the target screen.
- Screen styles, positions, and transitions are all defined in the css.

### Scene
The scene class contains an array of the entities currently loaded into the scene. It also assigns a unique ID to each element for referencing and removal.
- `add(someEntity)` - Adds an element to the scene. Make sure to add your gameobjects or they won't render!

### Game Objects
Game objects live in `src/gameObjects`. They are implemented as classes commonly extending the `Entity` class. The `Entity` class handles drawing of position and rotation internally but not the actual draw calls themselves. This leaves the `update()` and `draw()` functions available for customization.
- `draw()` - This function is called once for each draw call. Within this function, draw the object at position (0,0) because the position and rotation are applied by the Entity class.
- `update()` - This function is called once for each update call.
- `setPosition(position)` - When setting an entity's position, use setPosition instead of directly setting the `position` values. This allows precalculation of the actual draw position and offsets instead of needing to calculate them on every draw call.
- `this.offset` - The offset value of an entity's draw position. This is relative to the entity's `this.dimensions`, (0,0) is top left, (1,1) is bottom right.

### Levels
Levels live in `src/levels`. Each level extends the `Level` entity which is mostly a stub for the `load()` and `gameLogic()` functions.
- `load()` - This function is called when the level is loaded. This is where you will probably want to clear the scene, then add in all scene objects for the level.
- `gameLogic()` - This function is called once for each update loop. This is where you add level specific logic like handling scoring and transitions to different levels or scenes.

### Controls
Upon load, the `Controls` class will add event listeners to key, mouse, and touch events. It supports the addition of custom callbacks for each event via the `addCallback(eventKey, callback)` function. If you need to remove a callback keep track of the UUID returned by `addCallback` then call `removeCallback(eventKey, callBackUUID)`.

It also keeps an array of pressed Keys `this.pressedKeys` and stores the last position of the mouse `this.lastPosition`. This can be helpful for certain interaction methods.

Here is a list of the callback event keys:
- `mouseDown`
- `mouseUp`
- `mouseMove`
- `touchStart`
- `touchEnd`
- `touchMove`
- `keyDown`
- `keyUp`

### Audio
Upon game load, a master audio node is set up and stored under `GameState.Audio.masterAudioNode`. To add sounds or background music, create an `audioBuffer` class in the level's `load()` function, then add it to the audioNodes list. You will need to run the audioBuffer's `load()` function then once loaded, call the `play()` function to start the audio, or you could include `autoPlay: true` in the config.
```
const audioNode = new AudioBuffer({
  audioFileUrl : './audio/bg.mp3',
  autoPlay     : true,
  GameState    : this.GameState,
  shouldLoop   : true,
});
audioNode.load(() => {});
window.setTimeout(() => { audioNode.play(); }, 100);
this.audioNodes.push(audioNode);
```
If you are controlling sounds via a class which extends `LoadedEntity` (`Level` or `Entity`), you can use the `addAudioNode(audioNode)` function to load the sound and keep track of it for unloading. This also means the sounds will be stopped automatically when the level is unloaded.


### Sprite
The sprite entity extends the `Entity` class but adds functionality to draw a sprite from an image with animation frames. It expects a horizontal sprite strip. It also has `scale`, `mirrorX`, and `mirrorY` variables for scaling and mirroring the sprite. To set an animation simply set the sprite's `currentAnimation` string to the animation's key. Make sure to use the `load()` function after initializing. Here is an example of the animations array:

```
this.animations = {
  idle : {
    frames        : 12,
    loop          : true,
    spriteSheet   : './img/idle.png',
    ticksPerFrame : 4,
  },
  run : {
    frames        : 8,
    loop          : true,
    spriteSheet   : './img/run.png',
    ticksPerFrame : 4,
  },
  jump : {
    frames        : 4,
    loop          : true,
    spriteSheet   : './img/jump.png',
    ticksPerFrame : 12,
  },
};
```

### Background
Background is a special type of entity which uses `createPattern()` to draw a background element as a rectangle with specific dimensions. The `repeat` variable can be set to allow tiling.

```
const ground = new Background({
  GameState: this.GameState,
  dimensions: new Vector2(this.GameState.Canvas.width, 32),
  position: new Vector2(0, 0),
  imageUrl: './img/ground.png',
  repeat: 'repeat-x',
  scale: new Vector2(10, 10),
});
ground.load();
this.GameState.Scene.add(ground);
```

### Configs
Config files live in `src/config`. These are used to define the levels or hold config values for whatever you like!
