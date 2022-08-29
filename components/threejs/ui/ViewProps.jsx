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

export default function ViewProps(props){


  const [{scene, eObject3Ds}, {getSceneObj3DID}] = useContext(ThreejsContext);
  let ref;
  let id = crypto.randomUUID();

  function clickTest(){
    console.log("TEST")
    //console.log(scene)
    //console.log(eObject3Ds)
  }

  function onSelectView(){

  }

  //style='position:fixed;top:0px;left:0px;'
  return (<div ref={ref} id={id}>
    <div>
      <select>
        <option>Object3D</option>
        <option>Scenes</option>
      </select><button onClick={clickTest}>Test</button>
    </div>
    <div>
      
    </div>
  </div>)
}