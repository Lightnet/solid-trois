/*
  Project Name: solid-trois
  License: MIT
  Created by: Lightnet
*/

// https://threejs.org/docs/index.html#api/en/objects/Sprite

//import { useTrois} from "../TroisProvider.jsx"
//import useAnimationFrame from "../../helpers/useAnimationFrame.js"
import { createSignal, onCleanup, onMount } from 'solid-js';
import CObj3D from "./CObj3D.jsx"
import * as THREE from 'three';

const CSprite = (f => u => {  //function => args
  const _obj3D = f(u); // return {..., data, funs}
  //console.log(u)//props
  let _Object3D;

  onMount(() => {
    //console.log(_obj3D.getRef())
    const map = new THREE.TextureLoader().load( 'sprite.png' );
    const material = new THREE.SpriteMaterial( { map: map } );
    _Object3D = new THREE.Sprite( material );
    _obj3D.setup(_Object3D);
  });

  onCleanup(()=>{
    //console.log("clean up obj3DScene")
    _obj3D.dispose();
  })

  //html element render
  return _obj3D.render();

})(CObj3D);
export default CSprite;

/*
export default function CSprite(){

  function setup(){
    const map = new THREE.TextureLoader().load( 'sprite.png' );
    const material = new THREE.SpriteMaterial( { map: map } );

    const sprite = new THREE.Sprite( material );
    //scene.add( sprite );
  }

  return (<>
  </>)
}
*/