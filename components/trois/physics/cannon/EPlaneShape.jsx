/*
  Project Name: solid-trois
  License: MIT
  Created by: Lightnet
*/
/*
  Depend on the collision type it not recomand since it global infinity plane.
  By using the box does reduce some errors.
*/

// https://pmndrs.github.io/cannon-es/docs/index.html

import { 
  createSignal
, lazy
, onMount
, onCleanup
, createEffect
} from 'solid-js';

import * as CANNON from "cannon-es";
import useAnimationFrame from '../../helpers/useAnimationFrame';
import { useTrois } from "../../core/TroisProvider.jsx"
import { useCannon } from "../cannon/CannonProvider.jsx"

export default function EPlaneShape(props){

  const [state, {getSceneObj3DID}] = useTrois();
  const [stateCannon, {addWorldShape,removeWorldShape}] = useCannon();

  let ref = null;
  let id = crypto.randomUUID();
  let bloaded = false;
  let _shape;
  let _object3D;

  createEffect(() => {//check for variable changes
    //console.log("PLANE Shape eObject3Ds")
    let scene =state.scene
    //console.log(state)
    if(scene!=null && ref?.parentNode !=null && bloaded==false){
      //console.log("INIT CHECK OBJECT3D>>>")
      //console.log("ref.parentNode: ",ref.parentNode)
      getObject3D()
    }
  },state);

  function getObject3D(){
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

  function setup(){

    //const radius = 0.1 // m
    _shape = new CANNON.Body({
      type: CANNON.Body.STATIC,
      //shape: new CANNON.Plane(),
      //shape: new CANNON.Box( new CANNON.Vec3(2,2,2)),
      mass: 0, // kg
      //shape: new CANNON.Sphere(radius),
      shape: new CANNON.Plane(),
    })
    _shape.quaternion.setFromEuler(-Math.PI / 2, 0, 0) // make it face up
    _shape.position.set(0, -0.1, 0) // m
    addWorldShape(_shape)
    //world.addBody(groundBody)
  }

  function reset(){

  }

  function updateMesh(){
    if(_object3D!=null && _shape != null){
      //console.log("update shape body...")
      _object3D.position.copy(_shape.position)
      _object3D.quaternion.copy(_shape.quaternion)
    }
  }

  useAnimationFrame(updateMesh)

  onMount(() => {
    //console.log("BoxShape")
    //console.log(ref)
    //console.log(ref.parentNode)//works
    //setup();
  });

  onCleanup(()=>{
    console.log("clean up PlaneShape")
    //scene.remove(mesh)
    removeWorldShape(_shape)
  })

  return (<div ref={ref} id={id}>
    {props.children}
  </div>)
}
