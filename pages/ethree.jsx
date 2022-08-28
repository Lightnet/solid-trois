/*
  Project Name: solid-trois
  License: MIT
  Created by: Lightnet
*/

import { createSignal } from 'solid-js';
import EViewportScene from "../components/threejs/core/EViewportScene.jsx"
import {ThreejsProvider} from "../components/threejs/core/ThreejsProvider.jsx"
import ECube from "../components/threejs/core/entities/ECube.jsx"
import EDirectionalLight from "../components/threejs/core/entities/EDirectionalLight.jsx"
import EMesh from "../components/threejs/core/entities/EMesh.jsx"
import EBox from "../components/threejs/core/entities/EBox.jsx"
import EMeshNormalMaterial from "../components/threejs/core/entities/EMeshNormalMaterial.jsx"

export default function Three() {
  const [name, setName] = createSignal('Three');

  return (
    <>
      <ThreejsProvider>
        <EViewportScene>
          
          <EMesh>
            <EMeshNormalMaterial/>
            <EBox/>
          </EMesh>
          <EDirectionalLight direction={[-5, 0, -10]} />
        </EViewportScene>
      </ThreejsProvider>
    </>
  );
}
//
/*
<ECube></ECube>
*/
