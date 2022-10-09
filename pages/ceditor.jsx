/*
  Project Name: solid-trois
  License: MIT
  Created by: Lightnet
*/

import { createSignal } from 'solid-js';

import TroisProvider from "../components/trois/core/TroisProvider.jsx"

import VerticalSideBar from "../components/trois/ui/VerticalSideBar.jsx"
import VerticalSideBarRight from "../components/trois/ui/VerticalSideBarRight.jsx"
import ViewProps from "../components/trois/ui/ViewProps.jsx"

import CViewportReRender from "../components/trois/examples/CViewportReRender"
import CTroisEntitiesLoader from '../components/trois/loaders/CTroisEntitiesLoader.jsx';

//import CubeTest from "../components/trois/examples/CubeTest.jsx"
//import ThreejsCanvas from "../components/trois/core/ThreejsCanvas.jsx"

export default function CEditor() {

  //console.log("EDITOR")
  const [projectID, setProjectID] = createSignal('');

  return (
    <>
      <TroisProvider>
        <CViewportReRender>
          <CTroisEntitiesLoader/>
        </CViewportReRender>

        <VerticalSideBar>
          <ViewProps typ="factoryentity"></ViewProps>
        </VerticalSideBar>

        <VerticalSideBarRight>
          <ViewProps typ="entities"></ViewProps>
        </VerticalSideBarRight>



      </TroisProvider>
    </>
  );
}
/*
<ThreejsCanvas>
          <CubeTest></CubeTest>
          <CubeTest></CubeTest>
        </ThreejsCanvas>
*/