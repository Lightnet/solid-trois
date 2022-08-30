/*
  Project Name: solid-trois
  License: MIT
  Created by: Lightnet
*/

// https://github.com/vitejs/vite/issues/4124

import { 
  createSignal
, onCleanup

} from 'solid-js';

export default function Home() {
  const [dataRandom, setDataRandom] = createSignal('');

  let gun;
  let timerID;
  
  try{
    //gun = GUN("http://127.0.0.1:3000/gun");
    //gun = GUN(); //does not work on module es?
    gun = GUN(location.origin+"/gun");//works

    gun.get('mark').put({
      name: "Mark",
      email: "mark@gun.eco",
    });
    
    gun.get('mark').on((data, key) => {
      console.log("realtime updates:", data);
      setDataRandom(data.live)
    });

    gun.on("hi", peer => {
      //peer connect
      //console.log('connect peer to',peer);
      console.log("peer connect!");
    });
    gun.on("bye", peer => {
      // peer disconnect
      //console.log('disconnected from', peer);
      console.log("disconnected from peer!");
    });

    timerID = setInterval(() => { gun.get('mark').get('live').put(Math.random()) }, 2000);
  }catch(e){
    console.log(e)
  }

  onCleanup(()=>{
    console.log("CLEAN UP GUN")
    gun.get('mark').off();
    clearInterval(timerID)
  })

  return (
    <>
      <h1>Math Random: {dataRandom()}</h1>
    </>
  );
}