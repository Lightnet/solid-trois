/*
  Project Name: solid-trois
  License: MIT
  Created by: Lightnet
*/

import CObj3D from "./CObj3D.jsx"
import { createSignal, onCleanup, onMount } from 'solid-js';
import * as THREE from 'three';
//import { useTrois } from '../TroisProvider';

const CAmbientLight = (f => u => {  //function => args
  const _obj3D = f(u); // return {..., data, funs}
  //console.log(u)//props
  let _Object3D;

  onMount(() => {
    //console.log(_obj3D.getRef())
    _Object3D = new THREE.AmbientLight( 0x404040 ); // soft white light
    _Object3D.intensity=1;
    _obj3D.setup(_Object3D);
  });

  onCleanup(()=>{
    //console.log("clean up obj3DScene")
    _obj3D.dispose();
  })

  //html element render
  return _obj3D.render();

})(CObj3D);
export default CAmbientLight;

/*
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
*/