// src/Routes.tsx
import { createBrowserRouter } from "react-router-dom";
import Login from "./components/authComp/Login.tsx";
import Profile from "./Pages/Profile.tsx";
import Signup from "./components/authComp/Signup.tsx";
import CreateProfile from "./Pages/createProfile.tsx";
const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,

  },
  {
    path: "/signup",
    element: <Signup />
  },
  {
    path: "/profile",
    element: <Profile />
  },
  {
    path: "/profileSetting",
    element: <CreateProfile />
  }
]);

export default router