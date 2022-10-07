/*
  Project Name: solid-trois
  License: MIT
  Created by: Lightnet
*/

import { createSignal } from 'solid-js';
import CAmbientLight from '../components/trois/core/components/CAmbientLight.jsx';
import TroisCanvas from "../components/trois/core/TroisCanvas.jsx"
import TroisProvider from "../components/trois/core/TroisProvider.jsx"
import CubeTest from "../components/trois/examples/CubeTest.jsx"

export default function CThree() {
  const [name, setName] = createSignal('Three');

  return (
    <>
      <TroisProvider>
        <TroisCanvas>
          <CAmbientLight />
          <CubeTest position={[0,0,0]}></CubeTest>
          <CubeTest position={[0,2,0.5]}></CubeTest>
        </TroisCanvas>
      </TroisProvider>
    </>
  );
}