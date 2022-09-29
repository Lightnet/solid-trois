/*
  Project Name: solid-trois
  License: MIT
  Created by: Lightnet
*/

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
import { useTrois } from "../../core/TroisProvider.jsx"
import { CannonContext } from "./CannonProvider.jsx"
import useAnimationFrame from '../../helpers/useAnimationFrame.js';

export default function ESpehereShape(props){

  const [state, {getSceneObj3DID}] = useTrois();
  const [stateCannon, {addWorldShape, removeWorldShape}] = useContext(CannonContext);

  let ref;
  let id = crypto.randomUUID();
  let bfound = false;
  let bloaded = false;
  let _object3D = null;
  let _shape = null;

  createEffect(() => {//check for variable changes
    //console.log("BoxShape eObject3Ds")
    let scene =state.scene
    //console.log("id",id)
    //console.log("ref",ref)
    //note ref set up div and attach parent
    if(scene!=null && ref?.parentNode !=null && bloaded==false){
      //console.log("INIT CHECK OBJECT3D>>>")
      //console.log("ref.parentNode: ",ref.parentNode)
      getObject3D()
    }
  });

  function getObject3D(){
    //console.log("ref.parentNode: ",ref.parentNode)
    _object3D = getSceneObj3DID(ref.parentNode.getAttribute('id'));
    if(_object3D){
      //console.log(state.scene)
      _object3D = state.scene.getObjectByProperty("uuid",_object3D.obj3D.uuid)
      //console.log(_object3D)

      //console.log(stateCannon)
      //console.log("LOADED")
      bloaded=true;
      setup();
    }
  }

  function updateFrame(){
    //console.log("update shape body...")
    if(_object3D!=null && _shape != null){
      //console.log("update shape body...")
      //console.log(_shape.position)
      _object3D.position.copy(_shape.position)
      //_object3D.position.set(_shape.position.x,_shape.position.y, _shape.position.z)
      
      _object3D.quaternion.copy(_shape.quaternion)
      //_object3D.autoUpdate=true;
      //_object3D.updateMatrix();
      //console.log(_object3D.position)
    }
  }

  useAnimationFrame(updateFrame);

  //createMemo(() =>{
    //console.log("createMemo BoxShape eObject3Ds")
    //console.log(state)
  //});

  function setup(){
    //console.log(ref.parentNode.getAttribute('id'))
    //let obj3D = getSceneObj3DID(ref.parentNode.getAttribute('id'))
    //console.log(obj3D)
    //console.log(eObject3Ds)
    //console.log(_object3D)

    const radius = 0.1 // m
    const size = 0.5;
    const halfExtents = new CANNON.Vec3(size, size, size)
    const sphereBody = new CANNON.Body({
      //type: CANNON.Body.STATIC,
      //shape: new CANNON.Plane(),
      mass: 5, // kg
      //shape: new CANNON.Sphere(radius),
      shape: new CANNON.Box(halfExtents),
    })
    sphereBody.quaternion.setFromEuler(-Math.PI / 2, 0, 0) // make it face up
    //sphereBody.position.set(0, 10, 0) // m
    sphereBody.position.set(0, 5, 0) // m
    _shape = sphereBody
    //world.addBody(sphereBody)
    addWorldShape(_shape)
  }

  onMount(() => {
    //console.log("INIT CHECK OBJECT3D")
    //console.log("ref.parentNode: ",ref.parentNode)
  });

  onCleanup(()=>{
    console.log("clean up SphereShape")
    //scene.remove(mesh)
    removeWorldShape(_shape)
  })

  return (<div ref={ref} id={id}>
    {props.children}
  </div>)
}
