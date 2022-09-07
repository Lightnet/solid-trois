/*
  Project Name: solid-trois
  License: MIT
  Created by: Lightnet
*/

import { createSignal } from 'solid-js';

import {ThreejsProvider} from "../components/threejs/core/ThreejsProvider.jsx"

import VerticalSideBar from "../components/threejs/ui/VerticalSideBar.jsx"
import ViewProps from "../components/threejs/ui/ViewProps.jsx"

import CViewportReRender from "../components/threejs/core/CViewportReRender"
import CTroisEntitiesLoader from '../components/threejs/loaders/CTroisEntitiesLoader.jsx';

//import CubeTest from "../components/threejs/examples/CubeTest.jsx"
//import ThreejsCanvas from "../components/threejs/core/ThreejsCanvas.jsx"

export default function CEditor() {

  //console.log("EDITOR")
  const [projectID, setProjectID] = createSignal('');

  return (
    <>
      <ThreejsProvider>
        <CViewportReRender>
          <CTroisEntitiesLoader/>
        </CViewportReRender>

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