/*
  Project Name: solid-trois
  License: MIT
  Created by: Lightnet
*/

import Obj3D from "./CObj3D.jsx"
import {
  createSignal
, onMount
, onCleanup
} from 'solid-js';
//import { useTrois} from "../core/TroisProvider.jsx"

import * as THREE from 'three';

const CObj3DBox = (f => u => {  //function => args
  const _obj3D = f(u); // return {...data, funs}
  //console.log(_obj3D)
  //console.log("Hello?")
  //console.log(u)

  onMount(() => {
    console.log(_obj3D.getRef())
    const geometry = new THREE.BoxGeometry( 1, 1, 1 );
    const material = new THREE.MeshStandardMaterial({
      wireframe:true,
      color:'blue'
    });
    const mesh = new THREE.Mesh( geometry, material );
    _obj3D.setup(mesh);
  });

  onCleanup(()=>{
    console.log("clean up obj3DBox")
    _obj3D.dispose();
  })

  return _obj3D.render();

})(Obj3D);

//console.log(CObj3DBox)

export default CObj3DBox;