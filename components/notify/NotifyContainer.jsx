/*
  Project Name: solid-trois
  License: MIT
  Created by: Lightnet
*/

// https://www.solidjs.com/examples/context
// https://stackoverflow.com/questions/72368745/reseting-a-store-object-to-a-default-value-in-solidjs

import { 
  createSignal
, createEffect
, createMemo
, onCleanup
, onMount 
} from 'solid-js';

import "./notify.module.css";

/*
import { info, success, error ,warn
, notify_in
, notify_out
 } from "./notify.module.css";
 */
//console.log(info)

export default function NotifyContainer(props) {

  //console.log(info)
  let ref;

  const [fade , setFade] = createSignal(true)
  const [nColor , setNColor] = createSignal(props.color || 'info')
  const [nFade , setNFade] = createSignal('')
  const [ID , setID] = createSignal(props.id)

  //console.log(props)
  
  let fadeID;
  let closeID;

  function onClose(){
    if(typeof props?.onDeleteID == 'function'){
      props.onDeleteID(ID());
    }
  }

  function clickClose(){
    callFade()
    clearTimeout(fadeID)
    clearTimeout(closeID)
    setTimeout(()=>{
      if(typeof props?.onDeleteID == 'function'){
        props.onDeleteID(ID());
      }
    },2000)
  }

  //if(props.color == "info"){setNColor('info');}
  //else if(props.color == "success"){setNColor('success');}
  //else if(props.color == "error"){setNColor('error');}
  //else if(props.color == "warn"){setNColor('warn');}
  //else {setNColor('info');}

  function callFade(){
    console.log("TIMER CLOSE...")
    setFade(false)
    
    ref.classList.remove("notify_in"); //this works
    ref.classList.add("notify_out"); //this works
  }

  const nodeClass = createMemo(()=> {
    //console.log("createMemo: ",fade())
    return "notify" + " " + (fade()?"notify_in":"notify_out") + " " + nColor();
  })

  createEffect(()=>{
    console.log(nodeClass())
  })

  onMount(() => {
    //if(props?.autoClose){
      fadeID = setTimeout(()=>callFade(),9000)
      closeID = setTimeout(()=>{
        onClose()
      },10000)
    //}
  })

  onCleanup(()=>{
    console.log("CLEAN UP??")
    //console.log(fade())
    //console.log(nFade())
    //console.log("CLEAN:", fadeID)
    //clearTimeout(fadeID)
    //clearTimeout(closeID)
  })

  return (
    <div ref={ref} id={ID()} class={ nodeClass()}>
      
        {props.content}
      
        <button onClick={clickClose}> X </button>
      
    </div>
  );
}
/*
<span style="float:right;top:100px;">
</span>
*/