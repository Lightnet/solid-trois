/*
  Project Name: solid-trois
  License: MIT
  Created by: Lightnet
*/

import {
  createSignal
, onMount
, onCleanup  
} from 'solid-js';

// https://www.solidjs.com/examples/counter
export default function useAnimationFrame(callback){
  //const [count, setCount] = createSignal(0);
  let requestRef = null;
  //console.log("init...")
  if(typeof callback !== 'function'){
    console.log("Error callback Animation Frame null!")
    return;
  }
  const animate = time => {
    // The 'state' will always be the initial value here
    callback(time);
    //console.log(time)
    requestRef = requestAnimationFrame(animate);
  }
  requestRef = requestAnimationFrame(animate);
  onCleanup(()=>{
    //console.log("clean up")
    cancelAnimationFrame(requestRef)
  })
}