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
import { 
  Router
, useRoutes
//, Link
//, useParams
//, useLocation
} from '@solidjs/router';
import ThemeProvider from "./components/theme/ThemeProvider";
import IndexMenus from "./components/IndexMenus";
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
  const Route = useRoutes(routes);

  return (
    <ThemeProvider>
      <IndexMenus/>
      <Route />
    </ThemeProvider>
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