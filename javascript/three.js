import * as THREE from "three"
import { OrbitControls } from 'https://unpkg.com/three@0.144.0/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from 'https://unpkg.com/three@0.144.0/examples/jsm/loaders/GLTFLoader.js';
console.log('hello Three.js')
console.log(THREE);



const sizes = {
    width: screen.width*.8,
    height: screen.height*.8
}

// scene
const scene = new THREE.Scene()

// Red Cube

const geometry = new THREE.TorusKnotGeometry(6, 4, 124, 32)
const material = new THREE.MeshBasicMaterial({ color: 'green' })
material.wireframe = true
const mesh = new THREE.Mesh(geometry, material)
// scene.add(mesh)

// camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)

camera.position.z = 3
scene.add(camera)





//Render
const canvas = document.querySelector('.webgl')
console.log(canvas)
const renderer = new THREE.WebGLRenderer({ canvas })
renderer.anialias = true;
renderer.alpha = true;
renderer.setPixelRatio(devicePixelRatio);
renderer.setSize(sizes.width*0.8, sizes.height*0.8)


const ambient = new THREE.AmbientLight(0x404040, 5);
const light = new THREE.DirectionalLight(0xffffff, 2);
scene.add(ambient, light)
// Loader
let loader = new GLTFLoader();
loader.load('../three/Vending-Machine.glb', function (gltf) {
    scene.add(gltf.scene);
    vendingMachine = gltf.scene.children[0];
    
    
});

const controls = new OrbitControls( camera, renderer.domElement );

//controls.update() must be called after any manual changes to the camera's transform
camera.position.set(10, 10, 10);
controls.update();

function animate() {
	requestAnimationFrame( animate );

	// required if controls.enableDamping or controls.autoRotate are set to true
	controls.update();
    mesh.rotation.x += 0.03;
    mesh.rotation.y += 0.01;
	renderer.render( scene, camera );
     
} 



animate();