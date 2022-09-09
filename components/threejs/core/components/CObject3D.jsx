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

import {ThreejsContext} from "../ThreejsProvider.jsx"
import useAnimationFrame from "../../helpers/useAnimationFrame.js"

class CObject3D{

  constructor(props, refs) {
    const [bUpdate, setBUpdate] = createSignal(false)
    const [textScript, setTextScript] = createSignal("")
    const [{scene}, {addSceneObj}] = useContext(ThreejsContext);

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
        addSceneObj(mesh, id)
      }
      //console.log(divEl.parentNode)//works
    });

    onCleanup(()=>{
      //console.log("clean up object3d mesh")
      //console.log(scene)
      scene.remove(mesh)
    })

    return (<div id={id} ref={ref}>
      {props.children}
    </div>);
  }
}