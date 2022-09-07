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

import { ThreejsContext } from '../core/ThreejsProvider';
//import PrefabCube from "../prefabs/PrefabCube.jsx";
import CCube from "../core/components/CCube.jsx"

//need to add lazy load

function TroisEntitiesLoader(props){

  const [state] = useContext(ThreejsContext);
  console.log(state)

  createEffect(()=>{
    console.log(state.eObject3Ds)
  })

  //create object3d
  const entityObjects = createMemo(()=>{
    state.eObject3Ds.map((item)=>{
      if(item.typ == "cube"){
        return <CCube {...item}/>
        //return
      }
    })
  })

  return (<>
    {entityObjects}
  </>)
}

export default TroisEntitiesLoader;
