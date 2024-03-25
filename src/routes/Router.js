import { lazy } from 'react';
import { Navigate } from 'react-router-dom';
import Loadable from '../layouts/full/shared/loadable/Loadable';
import Logout from 'src/views/authentication/Logout';

/* ***Layouts**** */
const FullLayout = Loadable(lazy(() => import('../layouts/full/FullLayout')));
const BlankLayout = Loadable(lazy(() => import('../layouts/blank/BlankLayout')));

/* ****Pages***** */
const Dashboard = Loadable(lazy(() => import('../views/dashboard/Dashboard')));
const Error = Loadable(lazy(() => import('../views/authentication/Error')));
const Login = Loadable(lazy(() => import('../views/authentication/Login')));

const Router = [
  {
    path: '/',
    element: <FullLayout />,
    children: [
      { path: '/', element: <Dashboard /> },
      {
        path: '/manage',
        children: [
          { path: 'loans', exact: true, element: <Dashboard /> },
          { path: 'savings', exact: true, element: <Dashboard /> },
        ],
      },
      {
        path: '/reports',
        children: [
          { path: 'general', exact: true, element: <Dashboard /> },
          { path: 'loans', exact: true, element: <Dashboard /> },
          { path: 'savings', exact: true, element: <Dashboard /> },
        ],
      },
      {
        path: '/config',
        children: [],
      },
      { path: '*', element: <Navigate to="/auth/404" /> },
    ],
  },
  {
    path: '/auth',
    element: <BlankLayout />,
    children: [
      { path: '404', element: <Error /> },
      { path: '/auth/login', element: <Login /> },
      { path: '/auth/logout', element: <Logout /> },
      { path: '*', element: <Navigate to="/auth/404" /> },
    ],
  },
];

export default Router;
