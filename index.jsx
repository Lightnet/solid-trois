
// https://github.com/solidjs/solid-router
// https://www.solidjs.com/docs/latest/api#creatememo

import { 
  createSignal
, lazy
, observable 
, from
, createMemo
, createResource
, createEffect 
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
    path: '/three',
    component: lazy(() => import('./pages/three')),
  },
  {
    path: '/cannon',
    component: lazy(() => import('./pages/cannon')),
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

  //const obsv$ = from(observable(pathname));

  //obsv$.subscribe((v) =>{ 
    //console.log(v)
  //});


  return (
    <>
      {pathname() === "/three" ? (
        <>
          <Link href="/">Home</Link>
        </>
      ):(
        <>
        <Link href="/">Home</Link><span> | </span>
        <Link href="/about">About</Link><span> | </span>
        <Link href="/three">Three</Link><span> | </span>
        <Link href="/cannon">Cannon</Link><span> | </span>
        <hr />
        </>
      )}
      <Route />
    </>
  );
};
/*
<button onClick={() => setCount(count() + 1)}>{count()}</button>

*/
//<Hello />

createApp(App).use(MetaProvider).use(Router).mount('#app');