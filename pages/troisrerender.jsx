/*
  Project Name: solid-trois
  License: MIT
  Created by: Lightnet
*/

import CAmbientLight from "../components/trois/core/components/CAmbientLight";
import CCube from "../components/trois/core/components/CCube";
import CPerspectiveCamera from "../components/trois/core/components/CPerspectiveCamera";
import CScene from "../components/trois/core/components/CScene";
import CRerender from "../components/trois/core/CRerender";
import TroisProvider from "../components/trois/core/TroisProvider";

export default function Three() {

  return (<>
  <TroisProvider>
    <CRerender>
      <CPerspectiveCamera position={[0,0,1]}>
      </CPerspectiveCamera>
      <CScene>
        <CAmbientLight></CAmbientLight>
        <CCube></CCube>
      </CScene>
    </CRerender>
  </TroisProvider>
  </>)
}
// <CCube></CCube>