import React from 'react';
import secureRoute from './components/secureRoute';

const lazyWithPreload = factory => {
  const Component = React.lazy(factory);
  Component.preload = factory;
  return Component;
};

const UnauthorizedAccess = lazyWithPreload(() =>
  import('./components/public/unauthorizedAccess')
);
const Root = lazyWithPreload(() => import('./components/root'));
const Home = lazyWithPreload(() => import('./components/public/home'));
const SecuredPage = lazyWithPreload(() =>
  import('./components/secured/securedPage')
);
// https://hackernoon.com/lazy-loading-and-preloading-components-in-react-16-6-804de091c82d
const Child = lazyWithPreload(() =>
  import(/* webpackChunkName: 'secured' */ './components/secured/child')
);
const Child1 = lazyWithPreload(() =>
  import(/* webpackChunkName: 'secured' */ './components/secured/child.1')
);

const routes = [
  {
    component: Root,
    routes: [
      {
        path: '/',
        exact: true,
        component: Home
      },
      {
        path: '/app',
        component: secureRoute(SecuredPage),
        routes: [
          { path: '/app/child', exact: true, component: Child },
          { path: '/app/child1', exact: true, component: Child1 }
        ]
      },
      {
        path: '/unauthorized',
        exact: true,
        component: UnauthorizedAccess
      }
    ]
  }
];

export default routes;
