/*
  Project Name: solid-trois
  License: MIT
  Created by: Lightnet
*/

import * as THREE from 'three';

export default function box() {
  const geometry = new THREE.BoxGeometry(0.2, 0.2, 0.2 );
  return geometry;
}