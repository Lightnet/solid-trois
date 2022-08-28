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
import {ThreejsContext} from "../core/ThreejsProvider.jsx"

export default function Object3DProps(props){

  const [{scene, eObject3Ds}, {getSceneObj3DID}] = useContext(ThreejsContext);

  function clickTest(){
    console.log("TEST")
    console.log(scene)
    console.log(eObject3Ds)
  }

  return (<div style='position:fixed;top:0px;left:0px;'>
    <button onClick={clickTest}>Test</button>
  </div>)
}