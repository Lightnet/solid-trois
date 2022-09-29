/*
  Project Name: solid-trois
  License: MIT
  Created by: Lightnet
*/

//need work

// https://developer.mozilla.org/en-US/docs/Web/Events/Creating_and_triggering_events

import {
  createSignal
, onCleanup  
} from 'solid-js';

export default function useDispatch(event,args){

  const event = new Event(event,args);
  // Dispatch the event.
  window.dispatchEvent(event);
}