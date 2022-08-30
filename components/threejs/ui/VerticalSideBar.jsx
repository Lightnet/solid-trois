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
import {ThreejsContext} from "../core/ThreejsProvider.jsx"

import "./verticalsidebar.css"

export default function ViewProps(props){

  const [{scene, eObject3Ds}, {getSceneObj3DID}] = useContext(ThreejsContext);
  const [slide, setSlide ] = createSignal('leftsidebar_in');
  const [isClose, setIsClose ] = createSignal(false);

  function clickClose(){
    console.log("clickClose")
    setSlide('leftsidebar_out')
  }

  function clickOpen(){
    console.log("clickOpen")
    setSlide('leftsidebar_out')
  }

  createEffect(()=>{
    console.log(slide())
    //if(isClose()){
      //setSlide('leftsidebar_out')
    //}else{
      //setSlide('leftsidebar_in')
    //}
  })

  function clickOpen(){
    setIsClose(true);
    setSlide('leftsidebar_in')
  }

  return (<>
  
  <div class={slide()+` `} style='position:fixed;top:0px;left:0px;height:100vh;'>
    <div style="background-color:gray;">
      <label>Left Side Bar</label>
      <button onClick={clickClose}>x</button>
    </div>
    <div  style="background-color:gray;">
      {props.children}
    </div>
  </div>
  <div onClick={clickOpen} style="position:fixed;top:50%;left:0px;">
    TEST
  </div>
  </>)
}