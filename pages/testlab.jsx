




import {  createSignal } from 'solid-js';

export default function TestLab() {
  const [name, setName] = createSignal('Guest');
  return (
    <>
      <h1>Hello {name()}</h1>
    </>
  );
}