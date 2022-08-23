
// https://www.solidjs.com/examples/context

import { 
  createSignal
, lazy
, createContext
} from 'solid-js';
import { 
  createStore 
} from "solid-js/store";

export const CannonContext = createContext([{ 
  world:null,
  worlds:[]
}, {}]);

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
    }
  ];

  return (
    <CannonContext.Provider value={value}>
      {props.children}
    </CannonContext.Provider>
  );
}

export default CannonProvider;

