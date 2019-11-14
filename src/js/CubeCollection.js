function CubeCollection(len) {
  this.cubes = new Array(len);


  //Create each column, and then populate each column with rows
  for (var i = 0; i < len; i++) {
    this.cubes[i] = new Array(len);
    for (var j = 0; j < len; j++) {
      this.cubes[i][j] = new Cube(i,j,0);
    }
  }
}


//Method to iterate through each cube
CubeCollection.prototype.forEachCube = function(callback) {
  for (var i = 0; i < len; i++) {
    for (var j = 0; j < len; j++) {
        callback(this.cubes[i][j]);
    }
  }
}


CubeCollection.prototype.startingState = function() {
  this.forEachCube(function(cube) {
    cube.setAlive(Math.random() > 0.8);
  });
}


CubeCollection.prototype.numberOfNeighbours = function(cube) {
    var x = cube.cube.position.x;
    var y = cube.cube.position.y;
    var counter;
    if (cube.userData.alive) {
      counter = -1;
    }
    else {
      counter = 0;
    }

    for (var i = -1; i < 2; i++) {
      for (var j = -1; j < 2; j++) {

        try {
          if (this.cubes[x+i][y+j].userData.alive) {
            counter++;
          }
        }
        catch (exception) {
            continue
        }
      }
    }
    return counter;
}

CubeCollection.prototype.progress = function() {
  this.forEachCube(function(cube) {
    var count = this.numberOfNeighbours(cube);
    if (cube.userData.alive && count < 2) {
      cube.userData.nextGenIsAlive = false;
    }
    else if (cube.userData.alive && (count == 2 || count == 3)) {
      cube.userData.nextGenIsAlive = true;
    }
    else if (cube.userData.alive && count > 3) {
      cube.userData.nextGenIsAlive = false;
    }

    else if (!cube.userData.alive && count == 3) {
      cube.userData.nextGenIsAlive = true;
    }
    else {
      cube.userData.nextGenIsAlive = false;
    }
  }.bind(this));

  this.forEachCube(function(cube) {
    cube.setAlive(cube.userData.nextGenIsAlive);
  });
}
