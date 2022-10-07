/*
  Project Name: solid-trois
  License: MIT
  Created by: Lightnet
*/

//import { createSignal } from 'solid-js';
import TroisCanvas from "../components/trois/core/TroisCanvas02.jsx"
import TroisProvider from "../components/trois/core/TroisProvider.jsx"

import CannonProvider from "../components/trois/physics/cannon/CannonProvider.jsx"
import CannonPhysics from "../components/trois/physics/cannon/CannonPhysics.jsx"

import ThreejsDebugUI from "../components/trois/ui/TroisDebugUI.jsx"

import CubeTest from "../components/trois/examples/CubeTest.jsx";
import BoxShape from "../components/trois/physics/cannon/EBoxShape.jsx";
import PlaneTest from '../components/trois/examples/PlaneTest.jsx';
import EPlaneShape from "../components/trois/physics/cannon/EPlaneShape.jsx";

import SphereTest from "../components/trois/examples/SphereTest.jsx";
import ESpehereShape from '../components/trois/physics/cannon/ESphereShape.jsx';
import CAmbientLight from '../components/trois/core/components/CAmbientLight.jsx';

//const obj3D = new CObject3D();

export default function Three() {

  return (
    <>
      <TroisProvider>
      <CannonProvider>
        <CannonPhysics>
          <TroisCanvas>
            <CAmbientLight/>

            <PlaneTest position={[0,0,0]}>
              <EPlaneShape/>
            </PlaneTest>

            <CubeTest position={[0,7,0]}>
              <BoxShape/>
            </CubeTest>

            <SphereTest position={[0,10,0.5]}>
              <ESpehereShape/>
            </SphereTest>

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