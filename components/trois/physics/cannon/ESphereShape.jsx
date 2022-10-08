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
, createEffect
, createMemo
} from 'solid-js';

import * as THREE from 'three';
import * as CANNON from "cannon-es";
import { useTrois } from "../../core/TroisProvider.jsx"
import { useCannon } from "./CannonProvider.jsx"
import useAnimationFrame from '../../helpers/useAnimationFrame.js';
import CCannonPhy3D from './CCannonPhy3D.jsx';

const ESpehereShape = (f => u => {  //function => args

  const [state, {getSceneObj3DID, addSceneObj,removeSceneObj}] = useTrois();
  const _obj3D = f(u); // return {..., data, funs}
  //console.log(u)//props
  let _Object3D;
  let _Shape;
  let debugMesh = null;
  const radius = 1 //

  onMount(() => {
    //console.log(_obj3D.getParent())
    let data =  _obj3D.getParent();
    _Object3D = data.obj3D;
    if(_Object3D){
      setup()
      setupDebug();
      useAnimationFrame(updateFrame);
    }
  });

  function setup(){
    //const radius = 1 //
    _Shape = new CANNON.Body({
      mass: 5, // kg
      shape: new CANNON.Sphere(radius),
    })
    //console.log(_Object3D)
    _Shape.position.set(_Object3D.position.x, _Object3D.position.y, _Object3D.position.z) // m
    _obj3D.setup(_Shape);
  }

  function updateFrame(){
    if(_Object3D!=null && _Shape != null){
      _Object3D.position.copy(_Shape.position)
    }
    drawDebug();
  }

  function drawDebug(){
    if(debugMesh){
      debugMesh.position.copy(_Shape.position)
      debugMesh.quaternion.copy(_Shape.quaternion)
    }
  }

  function setupDebug(){
    if(_Shape.shapes.length==1){
      //console.log(boxBody.shapes[0]);
      const geometry = new THREE.SphereGeometry( radius, 8, 8 );
      const wireframe = new THREE.WireframeGeometry( geometry );
      debugMesh = new THREE.LineSegments( wireframe );
      debugMesh.material.depthTest = false;
      debugMesh.material.opacity = 0.25;
      debugMesh.material.transparent = true;
      addSceneObj(debugMesh)
    }
  }

  onCleanup(()=>{
    //console.log("clean up obj3DScene")
    _obj3D.dispose();
    removeSceneObj(debugMesh)
  })

  //html element render
  return _obj3D.render();

})(CCannonPhy3D);
export default ESpehereShape;


/*
export default function ESpehereShape(props){

  const [state, {getSceneObj3DID,addSceneObj,removeSceneObj}] = useTrois();
  const [stateCannon, {addWorldShape, removeWorldShape}] = useCannon();

  let ref;
  let id = crypto.randomUUID();
  let bfound = false;
  let bloaded = false;
  let _object3D = null;
  let _shape = null;
  let debugMesh = null;

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
      if(debugMesh){
        debugMesh.position.copy(_shape.position)
        debugMesh.quaternion.copy(_shape.quaternion)
      }
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

    const radius = 1 //
    //const size = 0.5;
    //const halfExtents = new CANNON.Vec3(size, size, size)
    const sphereBody = new CANNON.Body({
      //type: CANNON.Body.STATIC,
      //shape: new CANNON.Plane(),
      mass: 5, // kg
      shape: new CANNON.Sphere(radius),
      //shape: new CANNON.Box(halfExtents),
    })
    sphereBody.quaternion.setFromEuler(-Math.PI / 2, 0, 0) // make it face up
    //sphereBody.position.set(0, 10, 0) // m
    //sphereBody.position.set(0, 5, 0) // m
    let pos = _object3D.position;
    sphereBody.position.set(pos.x, pos.y, pos.z) // m
    _shape = sphereBody
    //world.addBody(sphereBody)

    //console.log(sphereBody)
    if(sphereBody.shapes.length==1){
      const geometry = new THREE.SphereGeometry( radius, 8, 8 );
      const wireframe = new THREE.WireframeGeometry( geometry );
      debugMesh = new THREE.LineSegments( wireframe );
      debugMesh.material.depthTest = false;
      debugMesh.material.opacity = 0.25;
      debugMesh.material.transparent = true;

      addSceneObj(debugMesh)
    }

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
    removeSceneObj(debugMesh)
  })

  return (<div ref={ref} id={id}>
    {props.children}
  </div>)
}
*/