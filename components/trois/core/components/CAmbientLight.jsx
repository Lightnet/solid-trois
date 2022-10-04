/*
  Project Name: solid-trois
  License: MIT
  Created by: Lightnet
*/

import { createSignal, onCleanup, onMount } from 'solid-js';
import * as THREE from 'three';
import { useTrois } from '../TroisProvider';

export default function CAmbientLight(props) {

  const [{scene}, {addSceneObj, removeSceneObj}] = useTrois();
  const [pos, setPos] = createSignal(props.pos || [0,0,0])
  let ref;
  const id = crypto.randomUUID();
  let mesh;

  onMount(() => {
    if(scene){
      //scene.add(mesh)
      mesh = new THREE.AmbientLight( 0x404040 ); // soft white light
      mesh.intensity=5;
      //scene.add( light );
      addSceneObj(mesh, id)
    }
  })

  onCleanup(()=>{
    //console.log("clean up")
    removeSceneObj(mesh)
  })

  return (<div id={id} ref={ref}>
    {props.children}
  </div>)
}