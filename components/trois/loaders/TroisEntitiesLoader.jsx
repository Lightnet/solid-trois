/*
  Project Name: solid-trois
  License: MIT
  Created by: Lightnet
*/

import { 
  createSignal
, useContext 
, createEffect
, createMemo
} from 'solid-js';

import { useTrois } from '../core/TroisProvider.jsx';
import PrefabCube from "../prefabs/PrefabCube.jsx"
//need to add lazy load

function TroisEntitiesLoader(props){

  const [state] = useTrois();
  console.log(state)

  createEffect(()=>{
    console.log(state.eObject3Ds)
  })

  //create object3d
  const entityObjects = createMemo(()=>{
    state.eObject3Ds.map((item)=>{
      if(item.typ == "cube"){
        return <PrefabCube {...item}/>
        //return
      }
    })
  })

  return (<>
    {entityObjects}
  </>)
}

export default TroisEntitiesLoader;