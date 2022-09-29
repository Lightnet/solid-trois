/*
  Project Name: solid-trois
  License: MIT
  Created by: Lightnet
*/

import { createSignal } from 'solid-js';
import EViewportScene from "../components/trois/core/EViewportScene.jsx"
import TroisProvider from "../components/trois/core/TroisProvider.jsx"
import ECube from "../components/trois/core/entities/ECube.jsx"
import EDirectionalLight from "../components/trois/core/entities/EDirectionalLight.jsx"
import EMesh from "../components/trois/core/entities/EMesh.jsx"
import EBox from "../components/trois/core/entities/EBox.jsx"
import EMeshNormalMaterial from "../components/trois/core/entities/EMeshNormalMaterial.jsx"

export default function Three() {
  const [name, setName] = createSignal('Three');

  return (
    <>
      <TroisProvider>
        <EViewportScene>
          
          <EMesh>
            <EMeshNormalMaterial/>
            <EBox/>
          </EMesh>
          <EDirectionalLight direction={[-5, 0, -10]} />
        </EViewportScene>
      </TroisProvider>
    </>
  );
}
//
/*
<ECube></ECube>
*/
