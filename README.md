# [react-router-config](https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config) POC

A POC to test `react-router-config`.

1. Authenticated routes
   A HOC is used to wrap the components on the routes needing authentication.

2. Bundle route brances in separate bundles
   I haven't found a way to bundle all the components on a route branch in a single bundle.
   This POC imports all components with `React.lazy` so each component gets in a separate bundle.
   Grouping components in a single bundle can be achieved with

```
const Child = React.lazy(() =>
  import(/* webpackChunkName: 'secured' */ './components/secured/child')
);
```

All components with same `webpackChunkName` end up in the same bundle. (see `src/routes.js`)

To preload a route's child routes a `preload` method was added to `React.lazy` - taken from [here](https://hackernoon.com/lazy-loading-and-preloading-components-in-react-16-6-804de091c82d)

```
const lazyWithPreload = (factory) => {
  const Component = React.lazy(factory);
  Component.preload = factory;
  return Component;
}
```

After the parent route mounts the child components are loaded.
