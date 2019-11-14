function Cube(x,y,z) {
  this.geometry = new THREE.BoxGeometry( 0.6, 0.6, 0.6 );
  this.material = new THREE.MeshNormalMaterial( {color: 0xffff00, transparent: true, opacity: 1.0} );
  this.cube = new THREE.Mesh( this.geometry, this.material );
  this.cube.position.set(x, y, z);
  this.userData = { alive: false };
}


Cube.prototype.setAlive = function(aliveOrNot) {
  if (aliveOrNot) {
    this.material.color = new THREE.Color(0xffff00);
    this.material.opacity = 1.0;
    this.userData.alive = aliveOrNot;
  }
  else {
    this.material.opacity = 0;
    this.userData.alive = false;
  }
}
