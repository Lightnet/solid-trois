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

export default function EDirectionalLight({ direction }) {
  const light = new THREE.DirectionalLight(0x000000);
  light.position.set(...direction);
  return light;
}