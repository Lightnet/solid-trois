/*
  Project Name: solid-trois
  License: MIT
  Created by: Lightnet
*/

import { createSignal } from 'solid-js';
import TroisCanvas from "../components/trois/core/TroisCanvas.jsx"
import TroisProvider from "../components/trois/core/TroisProvider.jsx"
import CubeTest from "../components/trois/examples/CubeTest.jsx"

export default function CThree() {
  const [name, setName] = createSignal('Three');

  return (
    <>
      <TroisProvider>
        <TroisCanvas>
          <CubeTest></CubeTest>
          <CubeTest></CubeTest>
        </TroisCanvas>
      </TroisProvider>
    </>
  );
}