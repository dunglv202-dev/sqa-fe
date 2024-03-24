import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../views/dashboard/Dashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
  },
]);

export default router;
