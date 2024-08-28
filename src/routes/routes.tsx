import App from "@/App";
import AboutUs from "@/pages/About Us/AboutUs";
import HomePage from "@/pages/Home/HomePage";
import Login from "@/pages/Login&SignUp/Login";
import SignUp from "@/pages/Login&SignUp/SignUp";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <HomePage /> },
      { path: '/about-us', element: <AboutUs /> },
    ],
  },
  {
    path:'/login',
    element:<Login/>
  },
  {
    path:'/signup',
    element:<SignUp/>
  },
]);

export default router;
