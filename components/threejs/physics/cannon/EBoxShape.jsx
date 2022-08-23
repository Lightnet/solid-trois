


import { 
  createSignal
, lazy
, onMount
, onCleanup
, useContext
, createEffect
, createMemo
} from 'solid-js';

import * as CANNON from "cannon-es";
import {ThreejsContext} from "../../core/ThreejsProvider.jsx"

export default function BoxShape(props){

  const [state, {getSceneObj3DID}] = useContext(ThreejsContext);

  let ref = null;
  let id = crypto.randomUUID();
  let bfound = false;
  let bloaded = false;

  createEffect(() => {
    console.log("BoxShape eObject3Ds")
    console.log(state)
  },state);

  //createMemo(() =>{
    //console.log("createMemo BoxShape eObject3Ds")
    //console.log(state)
  //});

  function setup(){

    let obj3D = getSceneObj3DID(ref.parentNode.getAttribute('id'))
    //console.log(obj3D)
    //console.log(eObject3Ds)

    const radius = 1 // m

    const groundBody = new CANNON.Body({
      //type: CANNON.Body.STATIC,
      //shape: new CANNON.Plane(),
      mass: 5, // kg
      shape: new CANNON.Sphere(radius),
    })
    groundBody.quaternion.setFromEuler(-Math.PI / 2, 0, 0) // make it face up
    //world.addBody(groundBody)
  }

  onMount(() => {
    //console.log("BoxShape")
    //console.log(ref)
    //console.log("PARENT ID:",ref.parentNode.getAttribute('id'))
    //console.log(ref.parentNode)//works
    setup();
  });

  onCleanup(()=>{
    console.log("clean up BoxShape")
    //scene.remove(mesh)
  })

  return (<div ref={ref} id={id}>
    {props.children}
  </div>)
}
