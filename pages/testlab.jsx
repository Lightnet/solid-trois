/*
  Project Name: solid-trois
  License: MIT
  Created by: Lightnet
*/

import { createSignal } from 'solid-js';
import FlipClock from "../components/flip/FlipClock.jsx"

export default function TestLab() {
  const [name, setName] = createSignal('Guest');
  return (
    <>
      <h1>Hello {name()}</h1>
      <FlipClock></FlipClock>
    </>
  );
}