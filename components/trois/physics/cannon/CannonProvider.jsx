/*
  Project Name: solid-trois
  License: MIT
  Created by: Lightnet
*/

// https://www.solidjs.com/examples/context

import { 
  createSignal
, lazy
, createContext,
useContext
} from 'solid-js';
import { 
  createStore 
} from "solid-js/store";


export const CannonContext = createContext([{ 
  world:null,
  worlds:[]
}, {}]);


export function useCannon(){
  return useContext(CannonContext)
}

export function CannonProvider(props) {

  const [stateCannon, setStateCannon] = createStore({ 
    worlds: props.worlds || [], 
    world: props.world || null, 
    enablePhysics: props.enablePhysics || true, 
  });

  const value = [
    stateCannon,
    {
      setWorld(_world){
        setStateCannon("world",_world)
      },
      addWorldShape(_body){
        //console.log("stateCannon.world:",stateCannon.world)
        stateCannon.world.addBody(_body);
      },
      removeWorldShape(_body){
        //console.log("stateCannon.world:",stateCannon.world)
        //stateCannon.world.addBody(_body);
        stateCannon.world.removeBody(_body);
      },
    }
  ];

  return (
    <CannonContext.Provider value={value}>
      {props.children}
    </CannonContext.Provider>
  );
}

export default CannonProvider;

