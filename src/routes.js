import Root from "./components/root";
import Home from "./components/home";
import Child from "./components/child";

const routes = [
  {
    component: Root,
    routes: [
      {
        path: "/",
        exact: true,
        component: Home
      },
      {
        path: "/child/:id",
        component: Child
        // routes: [
        //   {
        //     path: "/child/:id/grand-child",
        //     component: GrandChild
        //   }
        // ]
      }
    ]
  }
];

export default routes;
