import { createBrowserRouter } from "react-router-dom";
import BlankLayout from "../layouts/BlankLayout";
import Login from "../views/auth/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <BlankLayout />,
    children: [{ path: "/login", element: <Login /> }],
  },
]);

export default router;
