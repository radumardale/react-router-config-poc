import Root from './components/root';
import Home from './components/public/home';
// import Child from './components/public/child';
import SecuredPage from './components/secured/securedPage';

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
        exact: true,
        component: SecuredPage
      }
    ]
  }
];

export default routes;
