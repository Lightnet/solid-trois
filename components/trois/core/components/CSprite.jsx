/*
  Project Name: solid-trois
  License: MIT
  Created by: Lightnet
*/

// https://threejs.org/docs/index.html#api/en/objects/Sprite

import { createSignal, onCleanup, onMount } from 'solid-js';
import { useTrois} from "../TroisProvider.jsx"

import * as THREE from 'three';
//import useAnimationFrame from "../../helpers/useAnimationFrame.js"

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