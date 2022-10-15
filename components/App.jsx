/*
  Project Name: solid-trois
  License: MIT
  Created by: Lightnet
*/

// https://github.com/solidjs/solid-router
// https://www.solidjs.com/docs/latest/api#creatememo

import { lazy } from 'solid-js';
import { 
  Router
, useRoutes
//, Link
//, useParams
//, useLocation
} from '@solidjs/router';
import ThemeProvider from "./theme/ThemeProvider";
import IndexMenus from "./IndexMenus";
import Home from '../pages/index.jsx';

const routes = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/about',
    component: lazy(() => import('../pages/about.jsx')),
  },
  {
    path: '/cthree',//component base
    component: lazy(() => import('../pages/cthree.jsx')),
  },
  {
    path: '/ethree',//object base
    component: lazy(() => import('../pages/ethree.jsx')),
  },
  {
    path: '/cannon',
    component: lazy(() => import('../pages/cannon.jsx')),
  },
  {
    path: '/ceditor',
    component: lazy(() => import('../pages/ceditor.jsx')),
  },
  {
    path: '/troistest01',
    component: lazy(() => import('../pages/troistest01.jsx')),
  },
  {
    path: '/troisrerender',
    component: lazy(() => import('../pages/troisrerender.jsx')),
  },
  //{
    //path: '/eeditor',
    //component: lazy(() => import('../pages/eeditor.jsx')),
  //},
  {
    path: '/testlab',
    component: lazy(() => import('../pages/testlab.jsx')),
  },
  {
    path: '/websocketgun',
    component: lazy(() => import('../pages/websocketgun.jsx')),
  },
];

const App = () => {
  const Route = useRoutes(routes);

  return (
    <ThemeProvider>
      <Router>
        <IndexMenus/>
        <Route />
      </Router>
    </ThemeProvider>
  );
};

export default App;