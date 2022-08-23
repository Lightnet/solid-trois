import {  createSignal } from 'solid-js';
import ThreejsCanvas from "../components/threejs/core/ThreejsCanvas.jsx"
import {ThreejsProvider} from "../components/threejs/core/ThreejsProvider.jsx"
import CubeTest from "../components/threejs/examples/CubeTest.jsx"
import CannonProvider from "../components/threejs/physics/cannon/CannonProvider.jsx"
import CannonPhysics from "../components/threejs/physics/cannon/CannonPhysics.jsx"
import BoxShape from "../components/threejs/physics/cannon/EBoxShape.jsx"
import ThreejsDebugUI from "../components/threejs/ui/ThreejsDebugUI.jsx"
export default function Three() {

  const [name, setName] = createSignal('Three');

  return (
    <>
      
      <ThreejsProvider>
      <CannonProvider>
        <CannonPhysics>
          <ThreejsCanvas>
            <CubeTest>
              <BoxShape></BoxShape>
            </CubeTest>
            <CubeTest>
              <BoxShape></BoxShape>
            </CubeTest>
          </ThreejsCanvas>
          <ThreejsDebugUI></ThreejsDebugUI>
        </CannonPhysics>

        </CannonProvider>
      </ThreejsProvider>
    </>
  );
}