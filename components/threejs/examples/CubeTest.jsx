

// https://www.solidjs.com/docs/latest/api#usecontext

import {
  createSignal
, onMount
, onCleanup
, useContext
} from 'solid-js';
import {ThreejsContext} from "../core/ThreejsProvider.jsx"

import * as THREE from 'three';
import useAnimationFrame from "../helpers/useAnimationFrame.js"

// https://www.solidjs.com/examples/counter
/*
export function useFrame(callback){
  //const [count, setCount] = createSignal(0);
  let requestRef = null;
  console.log("init...")
  if(typeof callback !== 'function'){
    console.log("Error callback Animation Frame null!")
    return;
  }
  const animate = time => {
    // The 'state' will always be the initial value here
    callback(time);
    //console.log(time)
    requestRef = requestAnimationFrame(animate);
  }
  requestRef = requestAnimationFrame(animate);
  onCleanup(()=>{
    console.log("clean up")
    cancelAnimationFrame(requestRef)
  })
}
*/

function CubeTest(props){

  const [{scene}, {addSceneObj}] = useContext(ThreejsContext);
  //console.log(scene)
  //console.log(setScene)

  let ref;
  const id = crypto.randomUUID();

  const geometry = new THREE.BoxGeometry( 0.2, 0.2, 0.2 );
  const material = new THREE.MeshNormalMaterial();
  const mesh = new THREE.Mesh( geometry, material );

  function updateFrame(time){
    //console.log("Hello")
    //console.log(id)
    //mesh.rotation.x = time / 2000;
    //mesh.rotation.y = time / 1000;
  }

  useAnimationFrame(updateFrame);

  onMount(() => {
    //console.log("CubeTest")
    //console.log(ref)
    if(scene){
      //scene.add(mesh)
      addSceneObj(mesh, id)
    }
    //console.log(divEl.parentNode)//works
  });

  onCleanup(()=>{
    console.log("clean up object3d mesh")
    console.log(scene)
    scene.remove(mesh)
  })

  return (  
  <div id={id} ref={ref}>
    {props.children}
  </div>
  );
}

export default CubeTest;