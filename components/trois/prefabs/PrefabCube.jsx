

// https://www.solidjs.com/docs/latest/api#usecontext

import {
  createSignal
, onMount
, onCleanup
, useContext
, children
} from 'solid-js';
import {ThreejsContext} from "../core/TroisProvider.jsx"

import * as THREE from 'three';
import useAnimationFrame from "../helpers/useAnimationFrame.js"

function CubeTest(props){

  const [{scene}, {addSceneObj}] = useContext(ThreejsContext);
  const [id, setID] = createSignal(props.id || crypto.randomUUID())
  let ref;
  //const id = crypto.randomUUID();

  //const geometry = new THREE.BoxGeometry( 0.2, 0.2, 0.2 );
  console.log(props)
  const geometry = new THREE.BoxGeometry( 
    props.params.width, 
    props.params.height, 
    props.params.depth
  );
  const material = new THREE.MeshNormalMaterial();
  const mesh = new THREE.Mesh( geometry, material );

  //function updateFrame(time){
    //console.log("Hello")
    //console.log(id)
    //mesh.rotation.x = time / 2000;
    //mesh.rotation.y = time / 1000;
  //}

  //useAnimationFrame(updateFrame);

  onMount(() => {
    //console.log("CubeTest")
    //console.log(ref)
    if(scene){
      //scene.add(mesh)
      addSceneObj(mesh, id())
    }
    //console.log(divEl.parentNode)//works
  });

  onCleanup(()=>{
    //console.log("clean up object3d mesh")
    //console.log(scene)
    scene.remove(mesh)
  })

  return (  
  <div id={id()} ref={ref}>
    {props.children}
  </div>
  );
}

export default CubeTest;