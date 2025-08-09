import UserLayout from "@/layouts/UserLayout";
import type { RouteObject } from "react-router-dom";
import { withSuspense } from "@/utils/WithSuspence";
import {
  Home,
  Shop,
  Cart,
  FAQ,
  About,
  Contact,
  Checkout,
  Categories,
  ProductDetails,
} from "@/routes/lazyRoutes/lazyRoutes";

const userRoutes: RouteObject = {
  path: "/",
  element: withSuspense(<UserLayout />),
  children: [
    { index: true, element: withSuspense(<Home />) },
    { path: "shop", element: withSuspense(<Shop />) },
    { path: "product/:id", element: withSuspense(<ProductDetails />) },
    { path: "cart", element: withSuspense(<Cart />) },
    { path: "checkout", element: withSuspense(<Checkout />) },
    { path: "faq", element: withSuspense(<FAQ />) },
    { path: "categories", element: withSuspense(<Categories />) },
    { path: "about", element: withSuspense(<About />) },
    { path: "contact", element: withSuspense(<Contact />) },
  ],
};

export default userRoutes;
