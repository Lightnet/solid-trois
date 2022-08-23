

// https://pmndrs.github.io/cannon-es/docs/index.html

import { 
  createSignal
, lazy
, onMount
, onCleanup
, createEffect
, useContext
} from 'solid-js';

import * as CANNON from "cannon-es";
import useAnimationFrame from '../../helpers/useAnimationFrame';
import { ThreejsContext } from "../../core/ThreejsProvider.jsx"
import { CannonContext } from "../cannon/CannonProvider.jsx"

export default function BoxShape(props){

  const [state, {getSceneObj3DID}] = useContext(ThreejsContext);
  const [stateCannon, {addWorldShape}] = useContext(CannonContext);

  let ref = null;
  let id = crypto.randomUUID();
  let bloaded = false;
  let _shape;
  let _object3D;

  createEffect(() => {
    console.log("PLANE Shape eObject3Ds")
    //console.log(state)
    if(bloaded==false){
      _object3D = getSceneObj3DID(ref.parentNode.getAttribute('id'));
      if(_object3D){
        //console.log(stateCannon)
        console.log("PLANE LOADED")
        bloaded=true;
        setup();
      }
    }
  },state);

  function setup(){

    const radius = 0.1 // m
    _shape = new CANNON.Body({
      type: CANNON.Body.STATIC,
      //shape: new CANNON.Plane(),
      //shape: new CANNON.Box( new CANNON.Vec3(2,2,2)),
      mass: 0, // kg
      shape: new CANNON.Sphere(radius),
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
      _object3D.obj3D.position.copy(_shape.position)
      _object3D.obj3D.quaternion.copy(_shape.quaternion)
    }
  }

  useAnimationFrame(updateMesh)

  onMount(() => {
    console.log("BoxShape")
    console.log(ref)
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
