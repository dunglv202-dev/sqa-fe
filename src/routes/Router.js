import { lazy } from 'react';
import { Navigate } from 'react-router-dom';
import Logout from 'src/views/authentication/Logout';
import Config from 'src/views/config/Config';
import Manage from 'src/views/list/Manage';
import ManageLoans from 'src/views/list/loans/ManageLoans';
import ManageSavings from 'src/views/list/savings/ManageSavings';
import Report from 'src/views/report/Report';
import Loadable from '../layouts/full/shared/loadable/Loadable';
import ConfigSaving from 'src/views/config/saving/ConfigSaving';

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
          { path: 'loans', exact: true, element: <ManageLoans /> },
          { path: 'savings', exact: true, element: <ManageSavings /> },
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
        children: [
          { path: '', exact: true, element: <Config /> },
          { path: 'savings', exact: true, element: <ConfigSaving /> },
        ],
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
