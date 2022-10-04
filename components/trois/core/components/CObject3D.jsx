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
, children
} from 'solid-js';

import { useTrois} from "../TroisProvider.jsx"
import useAnimationFrame from "../../helpers/useAnimationFrame.js"

class CObject3D{

  constructor(props, refs) {

    const [bUpdate, setBUpdate] = createSignal(false)
    const [textScript, setTextScript] = createSignal("")
    const [{scene}, {addSceneObj, removeSceneObj}] = useTrois();


    let ref;
    const id = crypto.randomUUID();

    const geometry = new THREE.BoxGeometry( 0.2, 0.2, 0.2 );
    const material = new THREE.MeshNormalMaterial();
    const mesh = new THREE.Mesh( geometry, material );

    onMount(() => {
      //console.log("CubeTest")
      //console.log(ref)
      if(scene){
        //scene.add(mesh)
        //addSceneObj(mesh, id)
        setup();
      }
      //console.log(divEl.parentNode)//works
    });

    function setup(){
      console.log("set up CObject3D")
      addSceneObj(mesh, id)
    }

    onCleanup(()=>{
      //console.log("clean up object3d mesh")
      //console.log(scene)
      //scene.remove(mesh)
      removeSceneObj(mesh)
    })

    return (<div id={id} ref={ref}>
      {props.children}
    </div>);
  }
}

export default CObject3D;