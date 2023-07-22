const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ antialias: true });
const cube = new THREE.Mesh(
  new THREE.BoxGeometry(),
  new THREE.MeshBasicMaterial({ color: 0x00ff00 })
);

init();
animate();

function init() {
  renderer.setSize(200, 200); // Adjust the size of the Three.js canvas
  document.getElementById("three-canvas").appendChild(renderer.domElement);
  scene.add(cube);
  camera.position.z = 5;
}

function animate() {
  requestAnimationFrame(animate);
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;
  renderer.render(scene, camera);
}
