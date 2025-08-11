// src/Routes.tsx
import { createBrowserRouter } from "react-router-dom";
import Login from "./components/authComp/Login.tsx";
import Profile from "./Pages/Profile.tsx";
import Signup from "./components/authComp/Signup.tsx";

import EditableJson from "./Pages/createProfile.tsx";
import { Protector } from "./Protector.tsx";
import Home from "./Pages/Home.tsx";
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
    path: "/",
    element: < Home />
  },
  {
    path: "/profile/:id",
    element: <Profile />
  },
  {
    path: "/profileSetting",
    element: <Protector><EditableJson /></Protector>
  }
]);

export default router