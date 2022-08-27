/*
  Project Name: solid-trois
  License: MIT
  Created by: Lightnet
*/

import { createSignal } from 'solid-js';

export default function Home() {
  const [name, setName] = createSignal('Guest');
  return (
    <>
      <h1>Hello {name()}</h1>
    </>
  );
}