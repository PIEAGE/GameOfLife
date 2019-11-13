function CubeCollection(len) {
  this.cubes = new Array(len);


  //Create Columns
  for (var i = 0; i < len; i++) {
    this.cubes[i] = new Array(len);
  }

  //Populate each row of each column with a new cube
  for (var i = 0; i < len; i++) {
    for (var j = 0; j < len; j++) {
      this.cubes[i][j] = new Cube(i,j,0);
    }
  }
}


//Iterate through each cube
CubeCollection.prototype.forEachCube = function(callback) {
  for (var i = 0; i < len; i++) {
    for (var j = 0; j < len; j++) {
        callback(this.cubes[i][j]);
    }
  }
}


CubeCollection.prototype.startingState = function() {
  this.forEachCube(function(cube) {
    cube.setAlive(Math.random() < 0.5);
  });

}
