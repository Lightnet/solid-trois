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
, createEffect
} from 'solid-js';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { useTrois } from "../core/TroisProvider.jsx"

export default function CViewportScene(props) {

  const [statethree, {setScene}] = useTrois();
  //const [name, setName] = createSignal('Guest');

  let canvas;
  let renderer;
  const id = crypto.randomUUID();

  const camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 0.01, 10 );
  camera.position.z = 1;
  const scene = new THREE.Scene();

  createEffect(() => {
    //console.log(statethree.eObject3Ds)
    //console.log(statethree)
  });

  //const geometry = new THREE.BoxGeometry( 0.2, 0.2, 0.2 );
  //const material = new THREE.MeshNormalMaterial();
  //const mesh = new THREE.Mesh( geometry, material );
  //scene.add( mesh );

  setScene(scene)

  function animationFrame( time ) {
    //mesh.rotation.x = time / 2000;
    //mesh.rotation.y = time / 1000;
    renderer.render( scene, camera );
  }

  function windowResize(){
    //console.log("resize")
    //console.log(renderer)
    if(renderer){
      //let width = document.body.clientWidth;
      //let height = document.body.clientHeight;

      let width = getActualWidth();
      let height = getActualHeight();

      //camera.aspect = window.innerWidth / window.innerHeight;
      camera.aspect = width/ height;
      camera.updateProjectionMatrix();
      //renderer.setSize( window.innerWidth, window.innerHeight );
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
    controls = new OrbitControls( camera, renderer.domElement );
    //console.log("canvas scene")
    //console.log(canvas)
  });

  onCleanup(()=>{
    //console.log("clean up")
    window.removeEventListener("resize", windowResize)
  })

  return (
    <>
      <canvas id={id} ref={canvas}>
        {props.children}
      </canvas>
    </>
  );
}