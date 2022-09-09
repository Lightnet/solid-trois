/*
  Project Name: solid-trois
  License: MIT
  Created by: Lightnet
*/

import { 
  createSignal
, createMemo
, createEffect 
, onCleanup
} from 'solid-js';

import { Link, useLocation } from '@solidjs/router';
import ToggleTheme from './theme/ToggleTheme';

const IndexMenus = () => {

  const location = useLocation();

  const pathname = createMemo(() => location.pathname);

  //for menu display
  let whitelist = [
    "/",
    "/about",
    "/testlab",
    "/websocketgun"
  ];

  const displayMenu = createMemo(()=>{
    //console.log("FIND:",whitelist.find((item)=>{
      //return item === pathname()      
    //}))
    if(
      whitelist.find((item)=>{return item === pathname()})
    ){
      //console.log("FOUND")
      // <ToggleTheme /> //does not work here layer?
      return ( <div>
        <Link class="btnLink" href="/">Home</Link><span> | </span>
        <Link class="btnLink" href="/about">About</Link><span> | </span>
        <Link class="btnLink" href="/ethree"> Entity Three</Link><span> | </span>
        <Link class="btnLink" href="/cthree"> Component Three</Link><span> | </span>
        <Link class="btnLink" href="/cannon">Cannon</Link><span> | </span>
        <Link class="btnLink" href="/ceditor">C Editor</Link><span> | </span>
        <Link class="btnLink" href="/eeditor">E Editor</Link><span> | </span>
        <Link class="btnLink" href="/testlab">Test Lab</Link><span> | </span>
        <Link class="btnLink" href="/websocketgun">Websocket Gun</Link><span> | </span>
        <ToggleTheme />
        </div>)
    }else{
      //console.log("NOT FOUND")
      return (<>
      </>)
    }
  })

  return (<>
  {displayMenu}
  </>)

}

export default IndexMenus;