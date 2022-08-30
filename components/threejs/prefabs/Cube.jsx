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
    <label>CUBE</label><br/>
    <label>width:</label><input /><br/>
    <label>height:</label><input /><br/>
    <label>depth:</label><input /><br/>
  </div>
  );
}

export default Blank;