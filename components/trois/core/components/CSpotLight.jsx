/*
  Project Name: solid-trois
  License: MIT
  Created by: Lightnet
*/

import { createSignal, onCleanup, onMount } from 'solid-js';
import { useTrois} from "../TroisProvider.jsx"

import * as THREE from 'three';
//import useAnimationFrame from "../../helpers/useAnimationFrame.js"

export default function CSpotLight(props){
  //const [bUpdate, setBUpdate] = createSignal(false)
  //const [textScript, setTextScript] = createSignal("")
  const [{scene}, {addSceneObj, removeSceneObj}] = useTrois();

  let ref;
  const id = crypto.randomUUID();
  let _Object3D;

  onMount(() => {
    if(scene){
      setup();
    }
    //console.log(ref.parentNode)//works
  });

  function setup(){
    _Object3D = new THREE.SpotLight();
    if(_Object3D){
      addSceneObj(_Object3D, id)
    }
  }

  onCleanup(()=>{
    //console.log("clean up object3d mesh")
    //console.log(scene)
    //scene.remove(mesh)
    removeSceneObj(_Object3D)
  })

  return (<div id={id} ref={ref}>
    {props.children}
  </div>)
}
