/*
  Project Name: solid-trois
  License: MIT
  Created by: Lightnet
*/

// https://www.solidjs.com/docs/latest/api#usecontext

import { createSignal, onCleanup, onMount } from 'solid-js';
import { useTrois} from "../TroisProvider.jsx"

import * as THREE from 'three';
import useAnimationFrame from "../../helpers/useAnimationFrame.js"

export default function CubeTest(props){
  
  const [bUpdate, setBUpdate] = createSignal(false)
  const [textScript, setTextScript] = createSignal("")
  const [{scene}, {addSceneObj}] = useTrois();

  let ref;
  const id = crypto.randomUUID();

  const geometry = new THREE.BoxGeometry( 0.2, 0.2, 0.2 );
  const material = new THREE.MeshNormalMaterial();
  const mesh = new THREE.Mesh( geometry, material );

  function updateFrame(time){
    if(bUpdate()==false){
      return;
    }
    //console.log("Hello")
    //console.log(id)
    //mesh.rotation.x = time / 2000;
    //mesh.rotation.y = time / 1000;
  }

  useAnimationFrame(updateFrame);

  onMount(() => {
    //console.log("CubeTest")
    //console.log(ref)
    if(scene){
      //scene.add(mesh)
      addSceneObj(mesh, id)
    }
    //console.log(divEl.parentNode)//works
  });

  onCleanup(()=>{
    //console.log("clean up object3d mesh")
    //console.log(scene)
    scene.remove(mesh)
  })

  return (  
  <div id={id} ref={ref}>
    {props.children}
  </div>
  );
}