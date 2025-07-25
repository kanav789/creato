// src/Routes.tsx
import { createBrowserRouter } from "react-router-dom";
import Login from "./components/authComp/Login.tsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
]);

export default router