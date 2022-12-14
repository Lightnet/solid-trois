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
    <>
      <div ref={ref}>
        {props.children}
      </div>
    </>
  );
}

export default Blank;