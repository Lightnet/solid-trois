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
} from 'solid-js';

function TestDisplay(props){
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
    <>
      <div ref={ref}>
        <label> TEST LABEL </label>
      </div>
    </>
  );
}

export default TestDisplay;