/*
  Project Name: solid-trois
  License: MIT
  Created by: Lightnet
*/

/*
  attach
  one is object3d parent
  two physics to chlld object3d
*/

import { 
  createSignal
, lazy
, onMount
, onCleanup
, createEffect
, createMemo
} from 'solid-js';
//import * as THREE from 'three';
//import * as CANNON from "cannon-es";
import { useTrois } from "../../core/TroisProvider.jsx"
import { useCannon } from "./CannonProvider.jsx"


export default function CCannonPhy3D(props){

  const [isPhysics, setIsPhysics] = createSignal(props?.isPhysics || true);
  const [state, {getSceneObj3DID, addSceneObj,removeSceneObj}] = useTrois();
  const [stateCannon, {addWorldShape, removeWorldShape}] = useCannon();

  const [debug, setDebug] = createSignal(props?.debug || true);
  const [object3D, setObject3D] = createSignal(null);
  const [shape3D, setShape3D] = createSignal(null);

  let ref;
  let id = crypto.randomUUID();
  //let _object3D;
  let _shape;

  function getParent(){
    let _object3D = getSceneObj3DID(ref.parentNode.getAttribute('id'));
    setObject3D(_object3D)
    return _object3D;
  }

  function setup(_shape){ 
    //addObject3D(_obj3D)
    setShape3D(_shape)
    addShape(_shape)
  }

  function addShape(_obj){
    addWorldShape(_obj)
  }

  function addObject3D(_obj3D){
    addSceneObj(_obj3D, id)
  }

  function dispose(){
    //removeSceneObj(_object3D)
    removeWorldShape(shape3D())
  }

  function render(){
    return (<div ref={ref} id={id}>
      {props.children}
    </div>)
  }

  return {
    getParent,
    setup,
    dispose,
    render
  }
}