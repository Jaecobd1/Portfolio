console.log('hello Three.js')
console.log(THREE);

const sizes = {
    width: 800,
    height: 600
}

// scene
const scene = new THREE.Scene()

// Red Cube

const geometry = new THREE.TorusKnotGeometry()
const material = new THREE.MeshBasicMaterial({ color: 'green' })
material.wireframe = true
const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)


// camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)

camera.position.z = 3


scene.add(camera)

//Render
const canvas = document.querySelector('.webgl')
console.log(canvas)
const renderer = new THREE.WebGLRenderer({ canvas })

renderer.setSize(sizes.width, sizes.height)



function animate() {
    requestAnimationFrame(animate);

    mesh.rotation.x += 0.01;
    mesh.rotation.y += 0.01;

    renderer.render(scene, camera)
}

animate();