import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Root } from "../pages/Root";
import { Home } from "../pages/home/Home";
import { AboutUs } from "../pages/about/AboutUs";
import { ProductDetails } from "../components/products/ProductDetails";

export const Routes = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        { index: true, element: <Home /> },
        { path: "/about-us", element: <AboutUs /> },
        { path: "/:productId", element: <ProductDetails /> },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};
