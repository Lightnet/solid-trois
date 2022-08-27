/*
  Project Name: solid-trois
  License: MIT
  Created by: Lightnet
*/

import { createSignal } from 'solid-js';
import ThreejsCanvas from "../components/threejs/core/ThreejsCanvas.jsx"
import {ThreejsProvider} from "../components/threejs/core/ThreejsProvider.jsx"
import CubeTest from "../components/threejs/examples/CubeTest.jsx"

export default function Three() {
  const [name, setName] = createSignal('Three');

  return (
    <>
      <ThreejsProvider>
        <ThreejsCanvas>
          <CubeTest></CubeTest>
          <CubeTest></CubeTest>
        </ThreejsCanvas>
      </ThreejsProvider>
    </>
  );
}