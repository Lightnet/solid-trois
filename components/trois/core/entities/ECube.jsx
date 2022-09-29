/*
  Project Name: solid-trois
  License: MIT
  Created by: Lightnet
*/

import {
  createSignal
, onMount
, onCleanup
, useContext
, createEffect
} from 'solid-js';
import * as THREE from 'three';
//import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
//import {ThreejsContext} from "./ThreejsProvider.jsx"
import useAnimationFrame from "../../helpers/useAnimationFrame.js"

export default function ECube(props){

  const geometry = new THREE.BoxGeometry( 0.2, 0.2, 0.2 );
  const material = new THREE.MeshNormalMaterial();
  const mesh = new THREE.Mesh( geometry, material );
  //console.log(props)

  function Update(time){
    if(mesh){
      mesh.rotation.x = time / 2000;
      mesh.rotation.y = time / 1000;
    }
  }

  useAnimationFrame(Update);

  onCleanup(()=>{//cleaup from scene
    console.log("EMESH dispose");
    geometry.dispose()
    //console.log(mesh)
    mesh.removeFromParent()
  })

  return {mesh, props}
}