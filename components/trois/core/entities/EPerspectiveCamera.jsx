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
} from 'solid-js';
import * as THREE from 'three';

export default function EPerspectiveCamera({ location }) {
  //need to config if html type if there editor restrict region area 
  const aspect = window.innerWidth / window.innerHeight;
  const camera = new THREE.PerspectiveCamera(106, aspect, 1, 1000);
  camera.position.set(...location);
  return camera;
}