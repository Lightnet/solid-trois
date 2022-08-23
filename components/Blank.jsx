

import {
  createSignal
, onMount
, onCleanup
, createEffect
, createMemo // https://www.solidjs.com/docs/latest/api#creatememo
, onError
} from 'solid-js';

function Blank(props){
  const [a, setA] = createSignal("initialValue");

  createEffect(()=>{
    
    console.log(a())

  });

  onMount(()=>{

  })

  onCleanup(()=>{
    
  })

  onError((err)=>{
    console.log(err)
  })


  return (
    <>
      <div ref={canvas}>
        {props.children}
      </div>
    </>
  );
}

export default Blank;