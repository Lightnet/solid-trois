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
import { useTrois} from "../core/TroisProvider.jsx"

export default function ViewProps(props){

  const [{scene, eObject3Ds}, {getSceneObj3DID}] = useTrois();

  function clickTest(){
    console.log("TEST")
    console.log(scene)
    console.log(eObject3Ds)
  }

  return (<div style='position:fixed;top:0px;left:0px;'>
    <button onClick={clickTest}>Test</button>
  </div>)
}