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

export default function useWindow(event, callback){
  window.addEventListener(event,callback)
  onCleanup(()=>{
    window.removeEventListener(event,callback)
  })
}