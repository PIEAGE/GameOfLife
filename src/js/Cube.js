function Cube(x,y,z) {
  var geometry = new THREE.BoxGeometry( 0.6, 0.6, 0.6 );
  var material = new THREE.MeshNormalMaterial( {color: 0xffff00, transparent: true, opacity: 1.0} );
  THREE.Mesh.call(this, geometry, material);
  this.position.set(x, y, z);
  this.userData = { alive: false };
}
Cube.prototype = Object.create(THREE.Mesh.prototype);
Cube.prototype.constructor = Cube;


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
