/*
  Project Name: solid-trois
  License: MIT
  Created by: Lightnet
*/

// https://bestofreactjs.com/repo/JLarky-solidjs-lazily

import {
  createSignal
, createEffect
, onMount
, onCleanup
, useContext
, createMemo
, lazy
, For
} from 'solid-js';
import { useTrois} from "../core/TroisProvider.jsx";
//import TestDisplay from "../../TestDisplay"

export default function EntitiesProps(props){

  const [{scene, eObject3Ds}, {getSceneObj3DID}] = useTrois();
  const [selectPrefab, setSelectPrefab] = createSignal('cube');
  const [prefabObjects, setPrefabObjects] = createSignal([
    {
      id:"cube",
      name:"Cube",
      component: lazy(() => import("../presets/PresetCube"))
    },
    {
      id:"sphere",
      name:"Sphere",
      component: lazy(() => import("../presets/PresetSphere"))
    },
    {
      id:"plane",
      name:"Plane",
      component: lazy(() => import("../presets/PresetPlane"))
    }
  ])

  function onSelectPrefab(e){
    setSelectPrefab(e.target.value)
  }
  
  const displayPrefab = createMemo(()=>{
    //console.log(prefabObjects().find((item)=>item.id == selectPrfeab()))
    const data = prefabObjects().find((item)=>item.id == selectPrefab());
    if(data){
      //console.log("data.component")
      //console.log(data.component)
      return <data.component />
      //const compBB = data.component;
      //return <compBB />
      
    }else{
      return (<></>);
    }
  })

  //createEffect(()=>{
    //displayPrefab();
  //})

  return (<div>
    <div>
    <label>Factory</label>
    </div>
    <div>
      <label>Entity: </label>
      <select onChange={onSelectPrefab}>
        <For each={prefabObjects()}>{(prefabObject,i) =>
          <option value={prefabObject.id}> {prefabObject.name} </option>
        }</For>
      </select>
      <div>
        {selectPrefab()}
      </div>
      <div>
        {displayPrefab}
      </div>
    </div>
  </div>)
}