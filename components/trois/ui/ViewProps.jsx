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
import { useTrois} from "../core/TroisProvider.jsx"
import Object3DProps from "./Object3DProps"
import SceneProps from "./SceneProps"
import EntitiesProps from "./EntitiesProps"
import FactoryEntityProps from "./FactoryEntityProps"

export default function ViewProps(props){

  const [{scene, eObject3Ds}, {getSceneObj3DID}] = useTrois();
  const [selectView, setSelectView] = createSignal(props.typ || "entities");

  let ref;
  let id = crypto.randomUUID();

  function onSelectView(e){
    //console.log(e.target.value)
    setSelectView(e.target.value)
  }

  const viewSelect = createMemo(()=>{
    //console.log("selectView() ",selectView() )
    if(selectView() == "object3D"){
      return (<Object3DProps/>)
    }else if(selectView() == "scene"){
      return (<SceneProps/>)
    }else if(selectView() == "entities"){
      return (<EntitiesProps/>)
    }else if(selectView() == "factoryentity"){
      return (<FactoryEntityProps/>)
    }else{
      return (<></>)
    }
  })

  //createEffect(()=>{
    //console.log(selectView())
    //console.log(viewSelect())
  //})

  //style='position:fixed;top:0px;left:0px;'
  return (<div ref={ref} id={id} style="width:160px;">
    <div>
      <select value={selectView()} onChange={onSelectView}>
        <option value="entities">Entities</option>
        <option value="factoryentity">FactoryEntity</option>
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