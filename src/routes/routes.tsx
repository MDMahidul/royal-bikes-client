import App from "@/App";
import DashboardLayout from "@/components/Layouts/DashboardLayout";
import AboutUs from "@/pages/About Us/AboutUs";
import Bikes from "@/pages/Bikes/Bikes";
import BikesList from "@/pages/Dashboard/BikesList/BikesList";
import Profile from "@/pages/Dashboard/Profile/Profile";
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
      { path: "/bikes", element: <Bikes /> },
      { path: "/about-us", element: <AboutUs /> },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/dashboard",
    element: 
        <DashboardLayout />,
    children: [
      {
        index: true,
        element: <Profile />,
      },
      {
        path: 'bikeslist',
        element: <BikesList />,
      },
    ],
  },
]);

export default router;
