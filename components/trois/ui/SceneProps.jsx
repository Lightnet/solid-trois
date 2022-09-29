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

export default function SceneProps(props){

  const [{scene, eObject3Ds}, {getSceneObj3DID}] = useTrois();

  function clickTest(){
    console.log("TEST")
    console.log(scene)
    console.log(eObject3Ds)
  }

  return (<div>
    <label>Scene</label>
    <button onClick={clickTest}>Test</button>
  </div>)
}