/*
  Project Name: solid-trois
  License: MIT
  Created by: Lightnet
*/

import { createSignal } from 'solid-js';
import ThreejsCanvas from "../components/threejs/core/ThreejsCanvas.jsx"
import {ThreejsProvider} from "../components/threejs/core/ThreejsProvider.jsx"
import CubeTest from "../components/threejs/examples/CubeTest.jsx"
import VerticalSideBar from "../components/threejs/ui/VerticalSideBar.jsx"
import ViewProps from "../components/threejs/ui/ViewProps.jsx"

export default function CEditor() {

  console.log("EDITOR")

  const [name, setName] = createSignal('Three');

  return (
    <>
      <ThreejsProvider>
        <VerticalSideBar>
          <ViewProps></ViewProps>

        </VerticalSideBar>
      </ThreejsProvider>
    </>
  );
}
/*
<ThreejsCanvas>
          <CubeTest></CubeTest>
          <CubeTest></CubeTest>
        </ThreejsCanvas>
*/