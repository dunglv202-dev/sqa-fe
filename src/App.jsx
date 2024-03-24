import { RouterProvider } from "react-router-dom";
import router from "./routers/Routers";
import AuthContextProvider from "./contexts/auth-context";

function App() {
  return (
    <AuthContextProvider>
      <RouterProvider router={router} />
    </AuthContextProvider>
  );
}

export default App;
