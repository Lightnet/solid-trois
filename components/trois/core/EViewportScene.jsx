/*
  Project Name: solid-trois
  License: MIT
  Created by: Lightnet
*/

// https://www.solidjs.com/tutorial/bindings_forward_refs
// https://www.npmjs.com/package/three
// https://github.com/solidjs/solid/issues/116

import {
  createSignal
, onMount
, onCleanup
, useContext
, createEffect
, children 
} from 'solid-js';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { useTrois } from "./TroisProvider.jsx"

export default function EViewportScene(props) {

  const [statethree, {setScene}] = useTrois();
  //const [name, setName] = createSignal('Guest');

  let canvas;
  let renderer;
  const id = crypto.randomUUID();

  const _camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 0.01, 10 );
  _camera.position.z = 1;
  const scene = new THREE.Scene();


  const resolved = children(() => props.children);//watch update changes
  //console.log(resolved())

  createEffect(() => {
    for(const eObj3D of resolved()){
      console.log(eObj3D)
      if(eObj3D?.mesh){
        if(eObj3D.mesh instanceof THREE.Mesh){
          console.log("FOUND MESH",eObj3D.mesh)
          scene.add(eObj3D.mesh)
        }
      }
      if(eObj3D instanceof THREE.DirectionalLight){
        //console.log("FOUND instanceof DirectionalLight")
        //console.log(eObj3D)
        scene.add(eObj3D)
      }
    }
    //console.log("scene: >>> :" ,scene )
  });

  //console.log(props.children())
  //props.children()
  //const [camera, light, meshes] = props.children;
  //console.log(meshes)
  //const object3Ds = props.children;
  //console.log(object3Ds)
  //console.log(object3Ds[0]())

  //createEffect(()=>{
    //let list = resolved.toArray();
    //console.log(list)
    //console.log(resolved())
    //console.log(props.children)

    //const [camera, light, meshes] = props.children;
    //console.log(meshes)
  //})

  setScene(scene)

  function animationFrame( time ) {
    renderer.render( scene, _camera );
  }

  function windowResize(){
    //console.log("resize", renderer)
    if(renderer){
      let width = getActualWidth();
      let height = getActualHeight();
      _camera.aspect = width / height;
      _camera.updateProjectionMatrix();
      renderer.setSize( width, height );
    }
  }

  function getActualWidth() {
    var actualWidth = //window.innerWidth ||
                      //document.documentElement.clientWidth ||
                      document.body.clientWidth ||
                      document.body.offsetWidth;

    return actualWidth;
  }

  function getActualHeight() {
    var actualHeight = //window.innerHeight ||
                      //document.documentElement.clientHeight ||
                      document.body.clientHeight ||
                      document.body.offsetHeight;

    return actualHeight;
  }
  let controls;
  onMount(() => {
    renderer = new THREE.WebGLRenderer( { antialias: true,canvas:canvas } );
    renderer.setSize( getActualWidth(), getActualHeight() );
    renderer.setAnimationLoop( animationFrame );
    window.addEventListener("resize", windowResize)
    controls = new OrbitControls( _camera, renderer.domElement );
    //console.log("canvas scene")
    //console.log(canvas)
  });

  createEffect(() => {
    //console.log(statethree.eObject3Ds)
    //console.log(statethree)
  });

  function cleanUpScene(){
    //console.log("cleanUpScene: ",scene)
    while (scene.children.length)
    {
      //console.log("remove...")
      scene.remove(scene.children[0]);
    }
  }

  onCleanup(()=>{
    cleanUpScene();
    //console.log("clean up")
    window.removeEventListener("resize", windowResize)
  })

  return (
    <>
      <canvas id={id} ref={canvas}>
        
      </canvas>
    </>
  );
}
// {props.children}

/*
export function PerspectiveCamera({ location }) {
  const aspect = window.innerWidth / window.innerHeight;
  const camera = new THREE.PerspectiveCamera(106, aspect, 1, 1000);
  camera.position.set(...location);
  return camera;
}

export function DirectionalLight({ direction }) {
  const light = new THREE.DirectionalLight(0x000000);
  light.position.set(...direction);
  return light;
}

const material = new THREE.MeshNormalMaterial();
export function Mesh(props) {
  const mesh = new THREE.Mesh(props.geometry, material);
  return [mesh, props];
}

export function box() {
  return new THREE.BoxGeometry(2, 2, 2);
}
*/


