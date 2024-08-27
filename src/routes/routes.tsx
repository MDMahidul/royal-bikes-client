import App from "@/App";
import AboutUs from "@/pages/About Us/AboutUs";
import HomePage from "@/pages/Home/HomePage";
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
]);

export default router;
