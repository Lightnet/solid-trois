/*
  Project Name: solid-trois
  License: MIT
  Created by: Lightnet
*/

// https://github.com/solidjs/solid-router
// https://www.solidjs.com/docs/latest/api#creatememo

import "./styles.css";

import { 
  createSignal
, lazy
, observable 
, from
, createMemo
, createResource
, createEffect 
, onCleanup
} from 'solid-js';
import { MetaProvider } from 'solid-meta';
import { createApp } from 'solid-utils';
import { Router, useRoutes, Link, useParams, useLocation } from 'solid-app-router';

import Home from './pages/index.jsx';

const routes = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/about',
    component: lazy(() => import('./pages/about')),
  },
  {
    path: '/cthree',//component base
    component: lazy(() => import('./pages/cthree')),
  },
  {
    path: '/ethree',//object base
    component: lazy(() => import('./pages/ethree')),
  },
  {
    path: '/cannon',
    component: lazy(() => import('./pages/cannon')),
  },
  {
    path: '/ceditor',
    component: lazy(() => import('./pages/ceditor')),
  },
  //{
    //path: '/eeditor',
    //component: lazy(() => import('./pages/eeditor')),
  //},
  {
    path: '/testlab',
    component: lazy(() => import('./pages/testlab')),
  },
  {
    path: '/websocketgun',
    component: lazy(() => import('./pages/websocketgun')),
  },
];

const App = () => {
  const [count, setCount] = createSignal(0);
  const Route = useRoutes(routes);
  const params = useParams();
  const location = useLocation();
  //console.log(params)
  const pathname = createMemo(() => location.pathname);
  //console.log(pathname)
  //console.log(pathname())

  //watch variables
  createEffect(() => {
    //console.log("pathname =", pathname())
  });

  let whitelist = [
    "/",
    "/about",
    "/testlab",
    "/websocketgun"
  ];

  //hande menu navigate
  const displayMenu = createMemo(()=>{
    //console.log("FIND:",whitelist.find((item)=>{
      //return item === pathname()      
    //}))
    if(
      whitelist.find((item)=>{return item === pathname()})
    ){
      console.log("FOUND")
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
        </div>)
    }else{
      console.log("NOT FOUND")
      return (<>
      </>)
    }

    return "";
  })

  return (
    <>
      {displayMenu}
      <Route />
    </>
  );
};
// <hr />

const dispose = createApp(App).use(MetaProvider).use(Router).mount('#app');

if (import.meta.hot) { //< module.hot
  //console.log(import.meta.hot)
  import.meta.hot.accept() //< module.hot.accept()
  import.meta.hot.dispose(dispose) //< module.hot.dispose(dispose)
  console.log("Hot Reload...")
}
/*

*/