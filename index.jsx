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
    path: '/testlab',
    component: lazy(() => import('./pages/testlab')),
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

  return (
    <>
      {pathname() === "/three" ? (
        <>
          <Link class="btnLink" href="/">Home</Link>
        </>
      ):(
        <>
        <Link class="btnLink" href="/">Home</Link><span> | </span>
        <Link class="btnLink" href="/about">About</Link><span> | </span>
        <Link class="btnLink" href="/ethree"> Entity Three</Link><span> | </span>
        <Link class="btnLink" href="/cthree"> Component Three</Link><span> | </span>
        <Link class="btnLink" href="/cannon">Cannon</Link><span> | </span>
        <hr />
        </>
      )}
      <Route />
    </>
  );
};

const dispose = createApp(App).use(MetaProvider).use(Router).mount('#app');

if (import.meta.hot) { //< module.hot
  //console.log(import.meta.hot)
  import.meta.hot.accept() //< module.hot.accept()
  import.meta.hot.dispose(dispose) //< module.hot.dispose(dispose)
  console.log("Hot Reload...")
}
/*

*/