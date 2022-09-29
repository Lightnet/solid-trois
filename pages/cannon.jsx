/*
  Project Name: solid-trois
  License: MIT
  Created by: Lightnet
*/

import { createSignal } from 'solid-js';
import TroisCanvas from "../components/trois/core/TroisCanvas.jsx"
import TroisProvider from "../components/trois/core/TroisProvider.jsx"
import CubeTest from "../components/trois/examples/CubeTest.jsx"
import CannonProvider from "../components/trois/physics/cannon/CannonProvider.jsx"
import CannonPhysics from "../components/trois/physics/cannon/CannonPhysics.jsx"

import BoxShape from "../components/trois/physics/cannon/EBoxShape.jsx"
import EPlaneShape from "../components/trois/physics/cannon/EPlaneShape.jsx"
import ThreejsDebugUI from "../components/trois/ui/TroisDebugUI.jsx"

export default function Three() {

  const [name, setName] = createSignal('Three');

  return (
    <>
      
      <TroisProvider>
      <CannonProvider>
        <CannonPhysics>
          <TroisCanvas>
            <CubeTest>
              <BoxShape/>
            </CubeTest>
            
            <CubeTest>
              <EPlaneShape/>
            </CubeTest>
            
            
          </TroisCanvas>
          <ThreejsDebugUI></ThreejsDebugUI>
        </CannonPhysics>

        </CannonProvider>
      </TroisProvider>
    </>
  );
}
/*

<EPlaneShape/>
<CubeTest>
  <BoxShape></BoxShape>
</CubeTest>
*/