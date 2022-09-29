/*
  Project Name: solid-trois
  License: MIT
  Created by: Lightnet
*/

import {
  createSignal
, onMount
, onCleanup
, useContext
, createEffect
, children
} from 'solid-js';
import * as THREE from 'three';

export default function EMesh(props) {
  //let material = new THREE.MeshNormalMaterial();
  let material;
  let geometry;
  //const mesh = new THREE.Mesh(props.geometry, material);
  console.log(props)
  let mesh;

  const resolved = children(() => props.children);//watch update chagnes

  //createEffect(() => {
    //console.log(resolved())
    //console.log("Array",Array.isArray(resolved()))
    if(Array.isArray(resolved())==true){
      //check if there mesh
      //check for material
      //check for geometry
      for(const objData of resolved()){
        console.log(objData)
        if(objData instanceof THREE.BoxGeometry){
          geometry = objData;
        }
        if(objData instanceof THREE.MeshNormalMaterial){
          material = objData;
        }
      }
      //console.log(mesh)
      //console.log(material)
      //material = new THREE.MeshNormalMaterial();
      //geometry = new THREE.BoxGeometry( 0.2, 0.2, 0.2 );
      mesh = new THREE.Mesh(geometry, material);
    }else{
      if(resolved() instanceof THREE.Mesh){
        material = new THREE.MeshNormalMaterial();
        mesh = new THREE.Mesh(resolved(), material);
      }
    }
  //});

  onCleanup(()=>{
    console.log("EMESH dispose");
    if(mesh){
      mesh.removeFromParent()
    }
  })

  return {mesh, props};
}