/*
  Project Name: solid-trois
  License: MIT
  Created by: Lightnet
*/

import {
  createSignal
, onMount
, onCleanup
, createEffect
//, createMemo
//, onError
} from 'solid-js';

function Blank(props){
  //const [a, setA] = createSignal("initialValue");
  let ref;
  createEffect(()=>{
    //console.log(a())
  });
  onMount(()=>{})
  onCleanup(()=>{})
  //onError((err)=>{
    //console.log(err)
  //})
  return (
  <div ref={ref}>
    <label>Sphere</label><br/>
    <label>radius :</label><input /><br/>
    <label>widthSegments:</label><input /><br/>
    <label>heightSegments :</label><input /><br/>
    <label>phiStart :</label><input /><br/>
    <label>phiLength :</label><input /><br/>
    <label>thetaStart:</label><input /><br/>
    <label>thetaLength:</label><input /><br/>
    
  </div>
  );
}

export default Blank;