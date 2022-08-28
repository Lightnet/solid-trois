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

export default function EMeshNormalMaterial(props) {
  const material = new THREE.MeshNormalMaterial();
  return material;
}