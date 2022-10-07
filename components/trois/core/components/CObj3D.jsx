/*
  Project Name: solid-trois
  License: MIT
  Created by: Lightnet
*/

import { createSignal, onMount, onCleanup } from 'solid-js';
import * as THREE from 'three';
import { useTrois } from "../TroisProvider.jsx"
import useAnimationFrame from "../../helpers/useAnimationFrame.js"

export default function CObj3D(props){
  //console.log("Obj3D Hello?")
  //console.log("props:",props)

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

  function setup(_obj){
    setObject3D(_obj)
    addObject3D(_obj)
  }

  function addObject3D(_obj3D){
    //console.log(_obj3D)
    addSceneObj(_obj3D, id)
  }

  onCleanup(()=>{
    console.log("clean up obj3d...")
    //removeSceneObj(_object3D())
  })

  function dispose(){
    removeSceneObj(_object3D())
  }

  function testlog(){
    console.log("test LOG...")
  }

  function render(){
    return (<div id={id} ref={ref}>
      {props?.children}
    </div>);
  }

  function getRef(){
    return ref;
  }

  return {
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