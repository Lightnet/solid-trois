/*
  Project Name: solid-trois
  License: MIT
  Created by: Lightnet
*/

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
  const [camera, setCamera] = createSignal(null);
  const [scene, _setScene] = createSignal(null);

  let canvas;
  let renderer;
  let controls;
  const id = crypto.randomUUID();

  const _camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 0.01, 10 );
  _camera.position.z = 1;
  const _scene = new THREE.Scene();

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

  onMount(() => {
    setScene(_scene)

    renderer = new THREE.WebGLRenderer( { antialias: true,canvas:canvas } );
    renderer.setSize( getActualWidth(), getActualHeight() );
    renderer.setAnimationLoop( animationFrame );
    window.addEventListener("resize", windowResize)
    controls = new OrbitControls( _camera, renderer.domElement );
    //console.log("canvas scene")
    //console.log(canvas)
  });

  function animationFrame( time ) {
    //mesh.rotation.x = time / 2000;
    //mesh.rotation.y = time / 1000;
    renderer.render( _scene, _camera );
  }

  onCleanup(()=>{
    //console.log("clean up")
    window.removeEventListener("resize", windowResize)
  })

  return (<>
    <canvas id={id} ref={canvas}>
      {props.children}
    </canvas>
  </>)
}