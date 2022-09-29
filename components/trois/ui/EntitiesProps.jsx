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
import { useTrois } from "../core/TroisProvider.jsx";
//import TestDisplay from "../../TestDisplay"

export default function EntitiesProps(props){

  const [state, {getSceneObj3DID}] = useTrois();
  const [selectEntityID, setSelectEntityID] = createSignal('');
  const [selectEntityName, setEntityName] = createSignal('');

  function onSelectEntityIDe(e){
    setSelectEntityID(e.target.value)
  }

  const displayPrefab = createMemo(()=>{
    //console.log(prefabObjects().find((item)=>item.id == selectPrfeab()))
    console.log(state)
    const entities = state.eObject3Ds;
    console.log(entities)
    const data = entities.find((item)=>item.id == selectEntityID());
    console.log(data)
    //if(data){
      //console.log("data.component")
      //console.log(data.component)
      //return <data.component />
    //}else{
      //return (<></>);
    //}
    return (<></>);
  })

  //createEffect(()=>{
    //displayPrefab();
  //})

  return (<div>
    <div>
    <label>Entities</label>
    </div>
    <div>
      <select value={selectEntityName()} onChange={onSelectEntityIDe}>
        <option value=""> Select Entity </option>
        <For each={state.eObject3Ds}>{(entity,i) =>
          <option value={entity.id}> {entity.name} </option>
        }</For>
      </select>
      
    </div>
  </div>)
}
/*
<div>
        {selectPrfeab()}
      </div>
      <div>
        {displayPrefab}
      </div>
*/