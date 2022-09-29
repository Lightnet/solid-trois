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

  const [slide, setSlide ] = createSignal('leftsidebar_in');
  const [slideTab, setSlideTab ] = createSignal('leftsidebar_out');
  const [isClose, setIsClose ] = createSignal(false);
  //const [isTab, setIsTab ] = createSignal(false);

  function clickClose(){
    //console.log("clickClose")
    setSlide('leftsidebar_out')
    setSlideTab('leftsidebar_in')
  }

  createEffect(()=>{
    //console.log(slide())
    //if(isClose()){
      //setSlide('leftsidebar_out')
    //}else{
      //setSlide('leftsidebar_in')
    //}
  })

  function clickOpen(){
    setIsClose(true);
    setSlide('leftsidebar_in')
    setSlideTab('leftsidebar_out')
  }

  return (<>
  
  <div class={slide()+` `} style='position:fixed;top:0px;left:0px;height:100vh;'>
    <div style="background-color:gray;">
      <label>Left Side Bar
        <span style="float:right;">
          <button onClick={clickClose}>x</button>
        </span>
      </label>
    </div>
    <div style="background-color:gray;">
      {props.children}
    </div>
  </div>
  <div onClick={clickOpen} class={slideTab()} style="position:fixed;top:50%;left:0px;">
    <label>[]</label>
  </div>
  </>)
}