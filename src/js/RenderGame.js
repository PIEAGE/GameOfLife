function RenderGame (root) {

  //Setup scene and camera
  this.scene = new THREE.Scene();
  this.camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
  this.camera.position.x = 25;
  this.camera.position.y = 25;
  this.camera.position.z = 50;


  //Renderer
  this.renderer = new THREE.WebGLRenderer();
  this.renderer.setSize( window.innerWidth, window.innerHeight );

  //GridHelper
  this.size = 10;
  this.divisions = 10;
  this.gridHelper = new THREE.GridHelper( this.size, this.divisions, 0x888888, 0x888888);
  this.gridHelper.rotation.x = -(Math.PI / 2);
  //this.scene.add( this.gridHelper );
  this.gridHelper.position.x = 4.5;
  this.gridHelper.position.y = 4.5;
  this.scene.background = new THREE.Color( 0x084c61 );

  //Attach to DOMElement
  root.appendChild( this.renderer.domElement );

  //Record time for game tick
  this.initialTime = Date.now();
  this.currentTime = null;
}

//Render function prototype
RenderGame.prototype.render = function(world) {

  //Managing game tick
  this.currentTime = Date.now();
  var tickDuration = 100;
  var differenceInTime = Math.round(this.currentTime - this.initialTime);
  if (differenceInTime > tickDuration) {
    this.initialTime = this.currentTime - differenceInTime % tickDuration;
    //world.startingState();
    world.progress();

  }
  requestAnimationFrame(this.render.bind(this, world));
  this.renderer.render( this.scene, this.camera);
}
