import { lazy } from 'react';
import { Navigate } from 'react-router-dom';
import Logout from 'src/views/authentication/Logout';
import Config from 'src/views/config/Config';
import ConfigLoan from 'src/views/config/loan/ConfigLoan';
import ConfigSaving from 'src/views/config/saving/ConfigSaving';
import Manage from 'src/views/list/Manage';
import ManageLoans from 'src/views/list/loans/ManageLoans';
import ManageSavings from 'src/views/list/savings/ManageSavings';
import Report from 'src/views/report/Report';
import Loadable from '../layouts/full/shared/loadable/Loadable';
import GeneralReport from 'src/views/report/general/GeneralReport';
import LoanReport from 'src/views/report/loans/LoanReport';
import LoanDetails from 'src/views/list/loans/LoanDetails';
import SavingDetails from 'src/views/list/savings/SavingDetails';

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
          {
            path: 'loans',
            exact: true,
            children: [
              {
                path: '',
                exact: true,
                element: <ManageLoans />,
              },
              {
                path: ':loanId',
                exact: true,
                element: <LoanDetails />,
              },
            ],
          },
          {
            path: 'savings',
            exact: true,
            children: [
              {
                path: '',
                exact: true,
                element: <ManageSavings />,
              },
              {
                path: ':savingId',
                exact: true,
                element: <SavingDetails />,
              },
            ],
          },
        ],
      },
      {
        path: '/reports',
        children: [
          { path: '', exact: true, element: <Report /> },
          { path: 'general', exact: true, element: <GeneralReport /> },
          { path: 'loans', exact: true, element: <LoanReport /> },
          { path: 'savings', exact: true, element: <Dashboard /> },
        ],
      },
      {
        path: '/configs',
        children: [
          { path: '', exact: true, element: <Config /> },
          { path: 'savings', exact: true, element: <ConfigSaving /> },
          {
            path: 'loans',
            children: [
              { path: 'secured', exact: true, element: <ConfigLoan type="SECURED" /> },
              { path: 'unsecured', exact: true, element: <ConfigLoan type="UNSECURED" /> },
            ],
          },
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
