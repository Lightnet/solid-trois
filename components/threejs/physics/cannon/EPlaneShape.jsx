

// https://pmndrs.github.io/cannon-es/docs/index.html

import { 
  createSignal
, lazy
, onMount
, onCleanup
} from 'solid-js';

import * as CANNON from "cannon-es";
import useAnimationFrame from '../../helpers/useAnimationFrame';

export default function BoxShape(props){

  // const [{scene}, {setScene}] = useContext(ThreejsContext);

  let ref = null;
  let id = crypto.randomUUID();

  function setup(){
    const groundBody = new CANNON.Body({
      type: CANNON.Body.STATIC,
      shape: new CANNON.Plane(),
    })
    groundBody.quaternion.setFromEuler(-Math.PI / 2, 0, 0) // make it face up
    //world.addBody(groundBody)
  }

  function reset(){

  }

  function updateMesh(){

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
