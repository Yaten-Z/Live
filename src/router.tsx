import { createRootRoute, createRoute, createRouter, RouterProvider } from '@tanstack/react-router';
import App from './App';
import Home from './pages/Home';
import Moments from './pages/Moments';
import MomentDetail from './pages/MomentDetail';

const RootRoute = createRootRoute({
  component: App,
});

const HomeRoute = createRoute({
  getParentRoute: () => RootRoute,
  path: '/',
  component: Home,
});

const MomentsRoute = createRoute({
  getParentRoute: () => RootRoute,
  path: '/moments',
  component: Moments,
});

const MomentDetailRoute = createRoute({
  getParentRoute: () => RootRoute,
  path: '/moment/$id',
  component: MomentDetail,
});

const router = createRouter({
  routeTree: RootRoute.addChildren([
    HomeRoute,
    MomentsRoute,
    MomentDetailRoute,
  ]),
});

export { router, RouterProvider };
export type Router = typeof router;