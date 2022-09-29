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
, useContext
//, createMemo
//, onError
} from 'solid-js';
import { useTrois} from "../core/TroisProvider.jsx"

function PresetCube(props){

  const [width, setWidth] = createSignal(1);
  const [height, setHeight] = createSignal(1);
  const [depth, setDepth] = createSignal(1);

  const [widthSegments, setWidthSegments] = createSignal(1);
  const [heightSegments, setHeightSegments] = createSignal(1);
  const [depthSegments, setDepthSegments] = createSignal(1);

  const [{},{addEnitityObj}] = useTrois();
  let ref;

  //console.log(addEnitityObj)
  createEffect(()=>{
    //console.log(a())
  });
  onMount(()=>{})
  onCleanup(()=>{})
  //onError((err)=>{
    //console.log(err)
  //})

  function clickCreate(){
    addEnitityObj({
      id:crypto.randomUUID(),
      name:"cube",
      typ:"cube",
      params:{
        width:width(),
        height:height(),
        depth:depth(),
        widthSegments:widthSegments(),
        heightSegments:heightSegments(),
        depthSegments:depthSegments(),
      },
      pos:[0,0,0],
      rot:[0,0,0],
      scale:[1,1,1],
      isvisible:true,
      enable:true,
      wireframe:true,
      binteract:false,
      children:[],
      parent:""
    })
  }

  function inputWidth(e){setWidth(e.target.value)}
  function inputHeight(e){setHeight(e.target.value)}
  function inputDepth(e){setDepth(e.target.value)}
  function inputWidthSegments(e){setWidthSegments(e.target.value)}
  function inputHeightSegments(e){setHeightSegments(e.target.value)}
  function inputDepthSegments(e){setDepthSegments(e.target.value)}

  return (
  <div ref={ref}>
    <label>Cube:</label><br/>
    <label>width:</label><input value={width()} onInput={inputWidth}/><br/>
    <label>height:</label><input value={height()} onInput={inputHeight}/><br/>
    <label>depth:</label><input  value={depth()}  onInput={inputDepth}/><br/>
    <label>widthSegments:</label><input value={widthSegments()} onInput={inputWidthSegments}/><br/>
    <label>heightSegments:</label><input value={heightSegments()} onInput={inputHeightSegments}/><br/>
    <label>depthSegments:</label><input value={depthSegments()}  onInput={inputDepthSegments}/><br/>
    <button onClick={clickCreate}> Create Cube </button>
  </div>
  );
}

export default PresetCube;