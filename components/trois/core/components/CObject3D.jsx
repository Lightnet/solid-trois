/*
  Project Name: solid-trois
  License: MIT
  Created by: Lightnet
*/

import CObj3D from "./CObj3D.jsx"
import { createSignal, onMount, onCleanup } from 'solid-js';
import * as THREE from 'three';
//import { useTrois } from "../TroisProvider.jsx"
//import useAnimationFrame from "../../helpers/useAnimationFrame.js"

const CObject3D = (f => u => {  //function => args
  const _obj3D = f(u); // return {..., data, funs}
  //console.log(u)//props
  let _Object3D;

  onMount(() => {
    //console.log(_obj3D.getRef())
    _Object3D = new THREE.Object3D();
    _obj3D.setup(_Object3D);
  });

  onCleanup(()=>{
    //console.log("clean up CObject3D")
    _obj3D.dispose();
  })

  //html element render
  return _obj3D.render();

})(CObj3D);
export default CObject3D;

/*
export default function CObject3D(props){

  const [bUpdate, setBUpdate] = createSignal(false)
  const [visiable, setVisiable] = createSignal(props?.visiable || true)
  const [textScript, setTextScript] = createSignal("")
  const [position, setPosition] = createSignal(props?.position || [0,0,0])
  const [rotation, setRotation] = createSignal(props?.rotation || [0,0,0])
  const [scale, setScale] = createSignal(props?.scale || [1,1,1])

  const [_object3D, setObject3D] = createSignal(null)

  const [{scene}, {addSceneObj, removeSceneObj}] = useTrois();

  let ref;
  const id = crypto.randomUUID();

  onMount(() => {
    console.log("Mount Object3D")
    //console.log(ref)
    if(scene){
      //const geometry = new THREE.BoxGeometry( 0.2, 0.2, 0.2 );
      //const material = new THREE.MeshNormalMaterial();
      //const mesh = new THREE.Mesh( geometry, material );
      //scene.add(mesh)
      //addSceneObj(mesh, id)
      setup();
    }
    //console.log(divEl.parentNode)//works
    testlog();
  });

  function setup(){
    console.log("set up CObject3D")
    let obj3D = new THREE.Object3D();
    setObject3D(obj3D)
    addObject3D(obj3D)
  }

  function addObject3D(_obj3D){
    console.log(_obj3D)
    addSceneObj(_obj3D, id)
  }

  onCleanup(()=>{
    //console.log("clean up object3d mesh")
    //console.log(scene)
    //scene.remove(mesh)
    //removeSceneObj(mesh)
    removeSceneObj(_object3D())
  })

  function testlog(){
    console.log("test LOG...")
  }

  return (<div id={id} ref={ref}>
    {props?.children}
  </div>);
}
*/