/*
  Project Name: solid-trois
  License: MIT
  Created by: Lightnet
*/

import {
  createSignal
, onMount
, onCleanup
, useContext
, createEffect
} from 'solid-js';
//import {ThreejsContext} from "../core/ThreejsProvider.jsx"

import "./verticalsidebar.css"

export default function ViewProps(props){

  const [slide, setSlide ] = createSignal('rightsidebar_in');
  const [slideTab, setSlideTab ] = createSignal('rightsidebar_out');
  const [isClose, setIsClose ] = createSignal(false);
  //const [isTab, setIsTab ] = createSignal(false);

  function clickClose(){
    //console.log("clickClose")
    setSlide('rightsidebar_out')
    setSlideTab('rightsidebar_in')
  }

  createEffect(()=>{
  })

  function clickOpen(){
    setIsClose(true);
    setSlide('rightsidebar_in')
    setSlideTab('rightsidebar_out')
  }

  return (<>
  
  <div class={slide()+` `} style='position:fixed;top:0px;right:0px;height:100vh;'>
    <div style="background-color:gray;">
      <label>Right Side Bar
        <span style="float:right;">
          <button onClick={clickClose}>x</button>
        </span>
      </label>
    </div>
    <div style="background-color:gray;">
      {props.children}
    </div>
  </div>
  <div onClick={clickOpen} class={slideTab()} style="position:fixed;top:50%;right:0px;">
    <label>[]</label>
  </div>
  </>)
}