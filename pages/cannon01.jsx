/*
  Project Name: solid-trois
  License: MIT
  Created by: Lightnet
*/

import { createSignal } from 'solid-js';
import TroisCanvas from "../components/trois/core/TroisCanvas02.jsx"
import TroisProvider from "../components/trois/core/TroisProvider.jsx"
import CubeTest from "../components/trois/examples/CubeTest.jsx"
import CannonProvider from "../components/trois/physics/cannon/CannonProvider.jsx"
import CannonPhysics from "../components/trois/physics/cannon/CannonPhysics.jsx"

import BoxShape from "../components/trois/physics/cannon/EBoxShape.jsx"
import EPlaneShape from "../components/trois/physics/cannon/EPlaneShape.jsx"
import ThreejsDebugUI from "../components/trois/ui/TroisDebugUI.jsx"
import PlaneTest from '../components/trois/examples/PlaneTest.jsx';

export default function Three() {

  //const [name, setName] = createSignal('Three');

  return (
    <>
      <TroisProvider>
      <CannonProvider>
        <CannonPhysics>
          <TroisCanvas>
            <PlaneTest pos={[0,0,0]}>
              <EPlaneShape/>
            </PlaneTest>

            <CubeTest pos={[0,7,0]}>
              <BoxShape/>
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

*/