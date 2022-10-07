/*
  Project Name: solid-trois
  License: MIT
  Created by: Lightnet
*/

import { createSignal, onCleanup, onMount } from 'solid-js';
import { useTrois} from "../TroisProvider.jsx"
import CObj3D from "./CObj3D.jsx"
import * as THREE from 'three';
//import useAnimationFrame from "../../helpers/useAnimationFrame.js"

const CSpotLight = (f => u => {  //function => args
  const _obj3D = f(u); // return {..., data, funs}
  //console.log(u)//props
  let _Object3D;

  onMount(() => {
    //console.log(_obj3D.getRef())
    _Object3D = new THREE.SpotLight();
    _obj3D.setup(_Object3D);
  });

  onCleanup(()=>{
    //console.log("clean up obj3DScene")
    _obj3D.dispose();
  })

  //html element render
  return _obj3D.render();
  
})(CObj3D);
export default CSpotLight;

/*
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
*/
