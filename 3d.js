import * as THREE from "https://cdn.skypack.dev/three";
import {GLTFLoader} from "https://cdn.skypack.dev/three/examples/jsm/loaders/GLTFLoader.js";

const scene=new THREE.Scene();
const camera=new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight);
const renderer=new THREE.WebGLRenderer({alpha:true});
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const loader=new GLTFLoader();
loader.load("models/gojo.glb",(gltf)=>{
 scene.add(gltf.scene);
});

camera.position.z=5;

function animate(){
 requestAnimationFrame(animate);
 renderer.render(scene,camera);
}
animate();