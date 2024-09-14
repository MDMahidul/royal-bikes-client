import App from "@/App";
import DashboardLayout from "@/components/Layouts/DashboardLayout";
import AboutUs from "@/pages/About Us/AboutUs";
import Bikes from "@/pages/Bikes/Bikes";
import BikesList from "@/pages/Dashboard/User/BikesList/BikesList";
import Profile from "@/pages/Dashboard/Profile/Profile";
import HomePage from "@/pages/Home/HomePage";
import Login from "@/pages/Login&SignUp/Login";
import SignUp from "@/pages/Login&SignUp/SignUp";
import PrivacyPolicies from "@/pages/Terms&Policy/PrivacyPolicies";
import TermsConditions from "@/pages/Terms&Policy/TermsConditions";
import { createBrowserRouter } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import BikeDetails from "@/pages/BikeDetails/BikeDetails";
import BookingConfirm from "@/pages/Payments/BookingConfirm";
import Unauthorized from "@/components/Error/Unauthorized";
import BikeMangement from "@/pages/Dashboard/Admin/BikeManagement/BikeMangement";
import UserManagement from "@/pages/Dashboard/Admin/UserManagement/UserManagement";
import MyBookings from "@/pages/Dashboard/User/MyBookings/MyBookings";
import CheckoutPage from "@/pages/Payments/CheckoutPage";
import BookingManagement from "@/pages/Dashboard/Admin/BookingManagement/BookingManagement";
import CouponManagement from "@/pages/Dashboard/Admin/CouponManagement/CouponManagement";
import ForgetPasswordPage from "@/pages/Login&SignUp/ForgetPasswordPage";
import ResetPasswordPage from "@/pages/Login&SignUp/ResetPasswordPage";
import ErrorPage from "@/components/Error/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
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
      {
        path: "checkout/:id",
        element: (
          <ProtectedRoute roles={["user"]}>
            <CheckoutPage />
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
    path: "/forget-password",
    element: <ForgetPasswordPage />,
  },
  {
    path: "/reset-password",
    element: <ResetPasswordPage />,
  },
  {
    path: "/unauthorized",
    element: <Unauthorized />,
  },
  {
    path: "/dashboard",
    element: (
      <ProtectedRoute roles={["superAdmin", "admin", "user"]}>
        <DashboardLayout />
      </ProtectedRoute>
    ),
    children: [
      {
        index: true,
        element: (
          <ProtectedRoute roles={["superAdmin", "admin", "user"]}>
            <Profile />
          </ProtectedRoute>
        ),
      },
      {
        path: "bikeslist",
        element: (
          <ProtectedRoute roles={["superAdmin", "admin", "user"]}>
            <BikesList />
          </ProtectedRoute>
        ),
      },
      {
        path: "manage-bikes",
        element: (
          <ProtectedRoute roles={["superAdmin", "admin"]}>
            <BikeMangement />
          </ProtectedRoute>
        ),
      },
      {
        path: "manage-users",
        element: (
          <ProtectedRoute roles={["superAdmin", "admin"]}>
            <UserManagement />
          </ProtectedRoute>
        ),
      },
      {
        path: "manage-rentals",
        element: (
          <ProtectedRoute roles={["superAdmin", "admin"]}>
            <BookingManagement />
          </ProtectedRoute>
        ),
      },
      {
        path: "manage-coupons",
        element: (
          <ProtectedRoute roles={["superAdmin", "admin"]}>
            <CouponManagement />
          </ProtectedRoute>
        ),
      },
      {
        path: "my-bookings",
        element: (
          <ProtectedRoute roles={["user"]}>
            <MyBookings />
          </ProtectedRoute>
        ),
      },
    ],
  },
]);

export default router;
