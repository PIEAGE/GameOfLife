var main = document.getElementById("main")
var game = new RenderGame(main);
var len = 50;
var world = new CubeCollection(len);
var deadProbabilityVal = document.getElementById('deadProbabilityVal');
var start = document.getElementById("start");


game.playing = true;
//Populate world with cubes
world.forEachCube(function(cube) {
  game.scene.add(cube);
});
//Setup OrbitalControls
game.setupOrbitalControls(25, 25, 50);
//Initial state of cubes in world
var probability = 0.5;
world.startingState(probability);


//Start and stop the game listener
start.addEventListener('click', function() {
  if (game.playing) {
    game.playing = !game.playing;
    document.getElementById("play-pause-button").src = "assets/images/play.svg";

  } else {
    game.playing = !game.playing;
    document.getElementById("play-pause-button").src = "assets/images/pause.svg";
  }
});


//Skip one generation listener
skip.addEventListener('click', function() {
  if (game.playing) {
    game.playing = !game.playing;
    world.progress();
    document.getElementById("play-pause-button").src = "assets/images/play.svg";
  } else {
    world.progress();
  }
});


//Restart game listener
refresh.addEventListener('click', function() {
  if (game.playing) {
    game.playing = !game.playing;
    document.getElementById("play-pause-button").src = "assets/images/play.svg";
    world.startingState(probability);
  } else {
    world.startingState(probability);
  }
});


//Camera Rotation Listener
rotation.addEventListener('click', function() {
  if (game.controls.autoRotate == true) {
    game.controls.autoRotate = false;
    document.getElementById("rotate-button").src = "assets/images/rotation.svg";
  } else {
    game.controls.autoRotate = true;
    document.getElementById("rotate-button").src = "assets/images/rotationLock.svg";
  }
});


//Get probability of cube being dead
document.getElementById('deadProbability')
  .addEventListener('input', function(event) {
    probability = event.target.value / 100;
    deadProbabilityVal.innerText = event.target.value + "%";
  });


game.render(world);
