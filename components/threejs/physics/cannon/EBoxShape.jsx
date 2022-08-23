


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
import { ThreejsContext } from "../../core/ThreejsProvider.jsx"
import { CannonContext } from "../cannon/CannonProvider.jsx"
import useAnimationFrame from '../../helpers/useAnimationFrame.js';

export default function BoxShape(props){

  const [state, {getSceneObj3DID}] = useContext(ThreejsContext);
  const [stateCannon, {addWorldShape}] = useContext(CannonContext);

  let ref = null;
  let id = crypto.randomUUID();
  let bfound = false;
  let bloaded = false;
  let _object3D = null;
  let _shape = null;

  createEffect(() => {
    console.log("BoxShape eObject3Ds")
    //console.log(state)
    if(bloaded==false){
      _object3D = getSceneObj3DID(ref.parentNode.getAttribute('id'));
      if(_object3D){
        console.log(state.scene)
        _object3D = state.scene.getObjectByProperty("uuid",_object3D.obj3D.uuid)
        console.log(_object3D)

        console.log(stateCannon)
        console.log("LOADED")
        bloaded=true;
        setup();
      }
    }
  },state);

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
      console.log(_object3D.position)
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
    console.log(_object3D)

    const radius = 0.1 // m

    const sphereBody = new CANNON.Body({
      //type: CANNON.Body.STATIC,
      //shape: new CANNON.Plane(),
      mass: 5, // kg
      shape: new CANNON.Sphere(radius),
    })
    sphereBody.quaternion.setFromEuler(-Math.PI / 2, 0, 0) // make it face up
    //sphereBody.position.set(0, 10, 0) // m
    sphereBody.position.set(0, 5, 0) // m
    _shape = sphereBody
    //world.addBody(sphereBody)
    addWorldShape(_shape)
  }

  onMount(() => {
    //console.log("BoxShape")
    //console.log(ref)
    //console.log("PARENT ID:",ref.parentNode.getAttribute('id'))
    //console.log(ref.parentNode)//works
    //setup();
  });

  onCleanup(()=>{
    console.log("clean up BoxShape")
    //scene.remove(mesh)
  })

  return (<div ref={ref} id={id}>
    {props.children}
  </div>)
}
