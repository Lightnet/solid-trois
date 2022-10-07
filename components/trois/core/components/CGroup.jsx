/*
  Project Name: solid-trois
  License: MIT
  Created by: Lightnet
*/

import { createSignal, onCleanup, onMount } from 'solid-js';
import { useTrois} from "../TroisProvider.jsx"

import * as THREE from 'three';
//import useAnimationFrame from "../../helpers/useAnimationFrame.js"

export default function CGroup(props){
  //const [bUpdate, setBUpdate] = createSignal(false)
  //const [textScript, setTextScript] = createSignal("")
  const [{scene}, {addSceneObj, removeSceneObj}] = useTrois();

  let ref;
  const id = crypto.randomUUID();
  const _Object3D = new THREE.Group();

  /*
  function updateFrame(time){
    if(bUpdate()==false){
      return;
    }
  }
  useAnimationFrame(updateFrame);
  */

  onMount(() => {
    if(scene){
      addSceneObj(_Object3D, id)
    }
    //console.log(ref.parentNode)//works
  });

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