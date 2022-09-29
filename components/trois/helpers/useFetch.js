/*
  Project Name: solid-trois
  License: MIT
  Created by: Lightnet
*/

import { onCleanup } from 'solid-js';

export default async function useFetch(url,args){
  let controller = new AbortController();
  let data;
  if(args==null){
    args={}
  }
  try{
    let response = await fetch(url, {
      ...args,
      signal: controller.signal,
      headers: {
        'Content-Type': 'application/json'
      }
    });
    data = await response.json();
  }catch(e){
    console.log(e)
    data="Error!"
  }
  onCleanup(()=>{
    // The other party, that cancels (at any point later):
    controller.abort(); // abort!
  })
  return data;
}