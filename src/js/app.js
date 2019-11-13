var main = document.getElementById("main")
var game = new RenderGame(main);
var len = 10;
var world = new CubeCollection(len);

//Init world with all possible cubes
world.forEachCube(function(cube) {
  game.scene.add(cube.cube);
});

world.startingState();
game.render(world);
