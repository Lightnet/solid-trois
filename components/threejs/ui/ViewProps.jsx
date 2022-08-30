/*
  Project Name: solid-trois
  License: MIT
  Created by: Lightnet
*/

import {
  createSignal
, createMemo
, onMount
, onCleanup
, useContext
, createEffect
} from 'solid-js';
import {ThreejsContext} from "../core/ThreejsProvider.jsx"
import Object3DProps from "./Object3DProps"
import SceneProps from "./SceneProps"
import EntitiesProps from "./EntitiesProps"

export default function ViewProps(props){

  const [{scene, eObject3Ds}, {getSceneObj3DID}] = useContext(ThreejsContext);
  const [selectView, setSelectView] = createSignal("entities");

  let ref;
  let id = crypto.randomUUID();

  let propsList=[];

  function onSelectView(e){
    //console.log(e.target.value)
    setSelectView(e.target.value)
  }

  const viewSelect = createMemo(()=>{
    console.log("selectView() ",selectView() )
    if(selectView() == "object3D"){
      return (<Object3DProps/>)
    }else if(selectView() == "scene"){
      return (<SceneProps/>)
    }else if(selectView() == "entities"){
      return (<EntitiesProps/>)
    }else{
      return (<></>)
    }
  })

  //createEffect(()=>{
    //console.log(viewSelect())
  //})

  //style='position:fixed;top:0px;left:0px;'
  return (<div ref={ref} id={id} style="width:160px;">
    <div>
      <select onChange={onSelectView}>
        <option value="entities">Entities</option>
        <option value="object3D">Object3D</option>
        <option value="scenes">Scenes</option>
        <option value="scene">Scene</option>
      </select>
    </div>
    <div>
      {viewSelect}
    </div>
  </div>)
}