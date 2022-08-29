/*
  Project Name: solid-trois
  License: MIT
  Created by: Lightnet
*/

import { 
  createSignal,
  createEffect
} from 'solid-js';
import FlipClock from "../components/flip/FlipClock.jsx"
import NotifyProvider from "../components/notify/NotifyProvider.jsx";
import NotifyManager from "../components/notify/NotifyManager.jsx";
import NotifyTest from "../components/notify/NotifyTest.jsx";
import Modal from "../components/modal/Modal.jsx"

export default function TestLab() {

  const [name, setName] = createSignal('Lab');
  const [isModal, setIsModal] = createSignal(false);

  function onCloseModal(){
    setIsModal(false);
  }

  function onOpenModal(){
    setIsModal(true);
  }

  function onToggleModal(){
    setIsModal(state=>!state);
  }

  //createEffect(()=>{
    //console.log(isModal())
  //})

  return (
    <>
      <label>Test {name()}</label>
      <NotifyProvider>
        <NotifyTest/>
        <NotifyManager/>

      </NotifyProvider>
      <button onClick={onOpenModal}> Modal </button>
      <button onClick={onToggleModal} > Toggle Modal </button>
      <Modal isopen={isModal} onClose={onCloseModal} enabledrag>
        <label>Hello Modal!</label>
      </Modal>
    </>
  );
}
//<FlipClock></FlipClock>