/*
  Project Name: solid-trois
  License: MIT
  Created by: Lightnet
*/

// https://www.solidjs.com/docs/latest/api#usecontext

import {
  createSignal
, onMount
, onCleanup
, useContext
, children
} from 'solid-js';
import { useTrois} from "../core/TroisProvider.jsx"

import * as THREE from 'three';
import useAnimationFrame from "../helpers/useAnimationFrame.js"

function PlaneTest(props){

  const [{scene}, {addSceneObj}] = useTrois();
  const [pos, setPos] = createSignal(props.pos || [0,0,0])
  //console.log(scene)
  //console.log(setScene)
  //console.log("props?.children()")
  //console.log(props?.children())
  //const resolved = children(() => props.children);
  //console.log("resolved")
  //console.log(resolved())

  let ref;
  const id = crypto.randomUUID();

  const geometry = new THREE.PlaneGeometry( 5, 5, 5, 5 );
  //const material = new THREE.MeshNormalMaterial();
  //const material = new THREE.WireframeGeometry( geometry );
  const material = new THREE.MeshStandardMaterial({
    wireframe:true,
    color:'#641E16'
  });
  const mesh = new THREE.Mesh( geometry, material );

  mesh.position.set(...pos())

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
    //console.log("clean up object3d mesh")
    //console.log(scene)
    scene.remove(mesh)
  })

  return (  
  <div id={id} ref={ref}>
    {props.children}
  </div>
  );
}

export default PlaneTest;