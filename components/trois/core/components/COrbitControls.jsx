/*
  Project Name: solid-trois
  License: MIT
  Created by: Lightnet
*/

// https://threejs.org/docs/index.html#api/en/objects/Sprite
import CObj3D from "./CObj3D.jsx"
import { createSignal, onMount, onCleanup } from 'solid-js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import * as THREE from 'three';
import { useTrois } from "../TroisProvider.jsx";

const COrbitControls = (f => u => {  //function => args
  const _obj3D = f(u); // return {..., data, funs}
  //console.log(u)//props
  let _Object3D;
  const [{scene}, {getSceneObj3DID}] = useTrois();
  let controls;

  _obj3D.setDataType("Object3D");

  onMount(() => {
    //console.log("CObject3D")
    //console.log(_obj3D.getRef())

    //need work
    const camera = getSceneObj3DID(_obj3D.getParentId()).obj3D;
    console.log(camera)

    if(camera){
      let canvas = document.getElementById(_obj3D.getParentId()).parentNode;
      if(canvas instanceof HTMLCanvasElement){

      }else{
        return console.log("CANVAS NOT FOUND FROM OrbitControls!")
      }
      //controls = new OrbitControls( _camera, renderer.domElement );
      controls = new OrbitControls( camera, canvas );
      //console.log(controls)
    }

    _Object3D = new THREE.Object3D();
    _obj3D.setup(_Object3D);
  });

  onCleanup(()=>{
    //console.log("clean up obj3DScene")
    _obj3D.dispose();
    if(controls){
      controls.dispose()
    }
  })

  //html element render
  return _obj3D.render();

})(CObj3D);
export default COrbitControls;