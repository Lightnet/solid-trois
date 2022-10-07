/*
  Project Name: solid-trois
  License: MIT
  Created by: Lightnet
*/


import CObj3D from "./CObj3D.jsx"
import * as THREE from 'three';
import { createSignal, onMount, onCleanup } from 'solid-js';

const CObj3DTest = (f => u => {  //function => args
  const _obj3D = f(u); // return {..., data, funs}
  //console.log(u)//props
  let _Object3D;

  onMount(() => {
    //console.log(_obj3D.getRef())
    _Object3D = new THREE.Object3D();
    _obj3D.setup(_Object3D);
  });

  onCleanup(()=>{
    //console.log("clean up obj3DScene")
    _obj3D.dispose();
  })

  //html element render
  return _obj3D.render();

})(CObj3D);
export default CObj3DTest;