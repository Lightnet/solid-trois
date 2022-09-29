/*
  Project Name: solid-trois
  License: MIT
  Created by: Lightnet
*/

// https://www.solidjs.com/examples/context
// https://stackoverflow.com/questions/72368745/reseting-a-store-object-to-a-default-value-in-solidjs

import { 
  createSignal
, lazy
, createContext
, createEffect,
useContext
} from 'solid-js';

import { createStore } from "solid-js/store";


export const TroisContext = createContext([{ 
  scenes:[],
  scene:null,
  object3Ds:[]
}, {}]);

export function useTrois(){
  return useContext(TroisContext);
}

export function TroisProvider(props) {

  const [state, setState] = createStore({ 
    scenes: props.scenes || [], 
    scene: props.scene || null, 
    object3Ds: props.object3Ds  || [],
    eObject3Ds: props.eObject3Ds  || []
  });

  //createEffect(() => {
    //console.log("state", state)
  //});

  const value = [
    state,
    {
      setScene(_scene){
        setState({scene:_scene});
      },
      addSceneObj(_object3d,_id){
        //console.log(state.scene)
        state.scene.add(_object3d)
        //console.log("state")
        //console.log(state)
        //let obj3Ds = state.eObject3Ds;
        //obj3Ds.push({id:_id,obj3D:_object3d})
        setState("object3Ds", items=>[...items,{id:_id,obj3D:_object3d}]);
        //setState({eObject3Ds: [...state.eObject3Ds,{id:_id,obj3D:_object3d}]});
      },
      // https://stackoverflow.com/questions/9329446/for-each-over-an-array-in-javascript
      // 
      getSceneObj3DID(_id){
        //console.log("checking... id:",_id)
        //console.log(state.eObject3Ds)
        let bfound=false;
        let tmpObj3D = null;
        for(const obj3D of state.object3Ds){
          //console.log(obj3D)
          if(_id == obj3D.id){
            //console.log("FOUND!")
            bfound=true;
            tmpObj3D =obj3D;
          }
        }
        //console.log("finish ... id")
        return tmpObj3D;
      },
      addEnitityObj(_obj){
        let eObj3D ={
          id: _obj.id || crypto.randomUUID(),
          typ: _obj.typ || "object3d",
          name:_obj.name || crypto.randomUUID(),
        }
        if(_obj.pos){
          eObj3D.pos=_obj.pos;
        }

        if(_obj.params){
          console.log("FOUND PARAMS")
          eObj3D.params=_obj.params;
        }
        setState("eObject3Ds", items=>[...items, eObj3D]);
        //setState("eObject3Ds", items=>[...items,{id:_id,obj3D:_object3d}]);
      }
    }
  ];


  return (
    <TroisContext.Provider value={value}>
      {props.children}
    </TroisContext.Provider>
  );
}


export default TroisProvider;