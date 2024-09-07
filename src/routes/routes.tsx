import App from "@/App";
import DashboardLayout from "@/components/Layouts/DashboardLayout";
import AboutUs from "@/pages/About Us/AboutUs";
import Bikes from "@/pages/Bikes/Bikes";
import BikesList from "@/pages/Dashboard/BikesList/BikesList";
import Profile from "@/pages/Dashboard/Profile/Profile";
import HomePage from "@/pages/Home/HomePage";
import Login from "@/pages/Login&SignUp/Login";
import SignUp from "@/pages/Login&SignUp/SignUp";
import PrivacyPolicies from "@/pages/Terms&Policy/PrivacyPolicies";
import TermsConditions from "@/pages/Terms&Policy/TermsConditions";
import { createBrowserRouter } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import BikeDetails from "@/pages/BikeDetails/BikeDetails";
import BookingConfirm from "@/pages/BookingConfirm/BookingConfirm";
import Unauthorized from "@/components/Error/Unauthorized";
import BikeMangement from "@/pages/Dashboard/Admin/BikeManagement/BikeMangement";
import UserManagement from "@/pages/Dashboard/Admin/UserManagement/UserManagement";
import CouponManagement from "@/pages/Dashboard/Admin/CouponManagement/CouponManagement";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "/bikes", element: <Bikes /> },
      { path: "/bikes/:bikeId", element: <BikeDetails /> },
      { path: "/about-us", element: <AboutUs /> },
      { path: "/terms-of-services", element: <TermsConditions /> },
      { path: "/privacy-policies", element: <PrivacyPolicies /> },
      {
        path: "/booking-confirmatin/:bikeId",
        element: (
          <ProtectedRoute roles={["user"]}>
            <BookingConfirm />
          </ProtectedRoute>
        ),
      },
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
    path: "/unauthorized",
    element: <Unauthorized />,
  },
  {
    path: "/dashboard",
    element: (
      <ProtectedRoute roles={["superAdmin","admin", "user"]}>
        <DashboardLayout />
      </ProtectedRoute>
    ),
    children: [
      {
        index: true,
        element: <Profile />,
      },
      {
        path: "bikeslist",
        element: <BikesList />,
      },
      {
        path: "manage-bikes",
        element: <BikeMangement />,
      },
      {
        path: "manage-users",
        element: <UserManagement />,
      },
      {
        path: "manage-coupons",
        element: <CouponManagement />,
      },
    ],
  },
]);

export default router;
