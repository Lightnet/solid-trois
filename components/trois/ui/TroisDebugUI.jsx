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
} from 'solid-js';
import { useTrois } from "../core/TroisProvider.jsx"

//import * as THREE from 'three';

export default function TroisDebugUI(props){

  const [{scene, eObject3Ds}, {getSceneObj3DID}] = useTrois();

  function clickTest(){
    console.log("TEST")
    console.log(scene)
    console.log(eObject3Ds)
  }

  function clickTes2(){
    console.log(getSceneObj3DID("a6d5as46d4sa65"))
    
  }

  return (<div style='position:fixed;top:0px;left:0px;'>
    <button onClick={clickTest}>Test</button>
    <button onClick={clickTes2}>get object3D</button>
  </div>)
}