import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Root } from "../pages/Root";
import { Home } from "../pages/home/Home";
import { AboutUs } from "../pages/about/AboutUs";
import { ContactUs } from "../pages/contact/ContactUs";

export const Routes = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        { index: true, element: <Home /> },
        { path: "/about-us", element: <AboutUs /> },
        { path: "/contact-us", element: <ContactUs /> },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};
