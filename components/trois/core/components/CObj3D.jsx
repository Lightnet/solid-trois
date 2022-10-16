/*
  Project Name: solid-trois
  License: MIT
  Created by: Lightnet
*/

import { createSignal, onMount, onCleanup } from 'solid-js';
//import * as THREE from 'three';
import { useTrois } from "../TroisProvider.jsx"
//import useAnimationFrame from "../../helpers/useAnimationFrame.js"

//set up hander from extend
export default function CObj3D(props){
  //console.log("Obj3D Hello?")
  //console.log("props:",props)

  const [bUpdate, setBUpdate] = createSignal(false)
  const [visiable, setVisiable] = createSignal(props?.visiable || true)
  const [textScript, setTextScript] = createSignal("")
  const [position, setPosition] = createSignal(props?.position || [0,0,0])
  const [rotation, setRotation] = createSignal(props?.rotation || [0,0,0])
  const [scale, setScale] = createSignal(props?.scale || [1,1,1])

  const [dataType, setDataType] = createSignal(props?.datatype || "object3d")

  const [_object3D, setObject3D] = createSignal(null)

  const [{scene}, {addSceneObj, removeSceneObj}] = useTrois();
  //console.log(addSceneObj)

  let ref;
  const id = crypto.randomUUID();

  //set up object
  //add object to scene
  // need work for check parent
  function setup(_obj){
    if(_obj){
      _obj.position.set(...position())
      //console.log("POSITION");
      //console.log(position())
      //console.log(_obj.position)
      setObject3D(_obj)
      addObject3D(_obj)
    }
  }

  function addObject3D(_obj3D){
    //console.log(_obj3D)
    //console.log(addSceneObj)
    if(!ref.parentNode){
      return ;
    }
    //console.log("dataType: ",dataType())
    //console.log(ref.parentNode)
    let parentID = ref.parentNode.getAttribute('id');
    //console.log(parentID)
    //object3D, ref div id, ref parent id
    addSceneObj(_obj3D, id, parentID)
  }

  function getParentId(){
    return ref.parentNode.getAttribute('id');
  }

  //onCleanup(()=>{
    //console.log("clean up obj3d...")
    //removeSceneObj(_object3D())
  //})

  //clean up object data
  function dispose(){
    removeSceneObj(_object3D())
  }

  function testlog(){
    console.log("test LOG...")
  }

  function render(){
    return (<div id={id} ref={ref} datatype={dataType()}>
      {props?.children}
    </div>);
  }

  function getRef(){
    return ref;
  }

  return {
    getParentId,
    dataType,
    setDataType,
    getRef,
    bUpdate,
    setBUpdate,
    visiable,
    setVisiable,
    textScript,
    setTextScript,
    position,
    setPosition,
    rotation,
    setRotation,
    scale,
    setScale,
    _object3D,
    setObject3D,
    setup,
    addObject3D,
    render,
    testlog,
    dispose
  };
}

/*
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
*/