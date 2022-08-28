/*
  Project Name: solid-trois
  License: MIT
  Created by: Lightnet
*/

import { createSignal } from 'solid-js';
import FlipClock from "../components/flip/FlipClock.jsx"
import NotifyProvider from "../components/notify/NotifyProvider.jsx";
import NotifyManager from "../components/notify/NotifyManager.jsx";
import NotifyTest from "../components/notify/NotifyTest.jsx";

export default function TestLab() {
  const [name, setName] = createSignal('Lab');
  return (
    <>
      <label>Test {name()}</label>
      <NotifyProvider>
        <NotifyTest/>
        <NotifyManager/>

      </NotifyProvider>
    </>
  );
}
//<FlipClock></FlipClock>