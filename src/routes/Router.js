import { lazy } from 'react';
import { Navigate } from 'react-router-dom';
import Loadable from '../layouts/full/shared/loadable/Loadable';
import Logout from 'src/views/authentication/Logout';
import Manage from 'src/views/list/Manage';
import Config from 'src/views/config/Config';
import Report from 'src/views/report/Report';

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
        path: '/lists',
        children: [
          { path: '', exact: true, element: <Manage /> },
          { path: 'loans', exact: true, element: <Dashboard /> },
          { path: 'savings', exact: true, element: <Dashboard /> },
        ],
      },
      {
        path: '/reports',
        children: [
          { path: '', exact: true, element: <Report /> },
          { path: 'general', exact: true, element: <Dashboard /> },
          { path: 'loans', exact: true, element: <Dashboard /> },
          { path: 'savings', exact: true, element: <Dashboard /> },
        ],
      },
      {
        path: '/configs',
        children: [{ path: '', exact: true, element: <Config /> }],
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
