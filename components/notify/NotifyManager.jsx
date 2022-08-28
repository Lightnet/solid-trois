/*
  Project Name: solid-trois
  License: MIT
  Created by: Lightnet
*/

// https://www.solidjs.com/examples/context
// https://stackoverflow.com/questions/72368745/reseting-a-store-object-to-a-default-value-in-solidjs

import { 
  createSignal
, useContext
, createMemo
, createEffect
} from 'solid-js';

import { NotifyContext } from "./NotifyProvider.jsx";
import NotifyContainer from './NotifyContainer.jsx';

export default function NotifyManager(props) {

  const [{notifies,objNotify},{deleteNotifyID}] = useContext(NotifyContext);

  const [notes, setNotes] = createSignal([]);

  createEffect(()=>{
    if(objNotify()){
      //console.log(objNotify())
      //const objEl = 
      //console.log(objEl())
      //setNotes(state=>[...state, objEl()])
      setNotes(state=>[...state, <NotifyContainer onDeleteID={onDeleteID} {...objNotify()} />])
    }
  })

  //createEffect(()=>{
    //console.log(notes())
  //})

  function onDeleteID(id){
    setNotes(state=>state.filter(item=>item().id !== id))
    //console.log(notes())
  }

  //console.log(deleteNotifyID)

  const notifyMessages = createMemo(()=>{
    //console.log(notes())
    return notes()
  })

  return (
    <div style="position:fixed;top:0px;right:100px;">
      {notes}
    </div>
  );
}
// {notifies().map(item=><NotifyContainer onDeleteID={deleteNotifyID} {...item} />)}
// {notifyMessages}