import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { RootPage } from "../pages/Root";
import { HomePage } from "../pages/home/Home";
import { AboutUsPage } from "../pages/about/AboutUs";
import { ProductDetailsPage } from "../pages/products/ProductDetails";
import { ContactPage } from "../pages/contact/Contact";
import { SelectedWeight } from "../pages/products/SelectedWeight";

export const Routes = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootPage />,
      children: [
        { path: "/", element: <HomePage /> },
        { path: "/about-us", element: <AboutUsPage /> },
        {
          path: "/:productId",
          element: <ProductDetailsPage />,
          children: [
            {
              path: ":selectedWeight",
              element: (
                <SelectedWeight>
                  <ProductDetailsPage />
                </SelectedWeight>
              ),
            },
          ],
        },
        { path: "/contact-us", element: <ContactPage /> },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};
