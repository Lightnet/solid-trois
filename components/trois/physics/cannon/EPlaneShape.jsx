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
import CCannonPhy3D from './CCannonPhy3D.jsx';

const EPlaneShape = (f => u => {  //function => args

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
      //setupDebug();
      useAnimationFrame(updateFrame);
    }
  });

  function setup(){
    
    _Shape = new CANNON.Body({
      type: CANNON.Body.STATIC,
      mass: 0, // kg
      shape: new CANNON.Plane(),
    })
    //console.log(_Object3D)
    _Shape.quaternion.setFromEuler(-Math.PI / 2, 0, 0) // make it face up
    _Shape.position.set(_Object3D.position.x, _Object3D.position.y, _Object3D.position.z) // m

    //console.log(_Shape)
    //console.log(typeof _Shape.shapes[0])
    ///console.log(_Shape.shapes[0])
    //no mesh data

    _obj3D.setup(_Shape);
  }

  function updateFrame(){
    if(_Object3D!=null && _Shape != null){
      _Object3D.position.copy(_Shape.position)
      _Object3D.quaternion.copy(_Shape.quaternion)
    }
    drawDebug();
  }

  function drawDebug(){
    if(debugMesh){
      //debugMesh.position.copy(_Shape.position)
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
export default EPlaneShape;


/*
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
*/