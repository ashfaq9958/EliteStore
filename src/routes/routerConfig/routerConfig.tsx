import { createBrowserRouter } from "react-router-dom";
import { adminRoutes } from "../admin/adminRoutes";
import { userRoutes } from "../user/userRoutes";
import { withSuspense } from "@/utils/WithSuspence";
import Unauthorized from "@/pages/unauthorized/Unauthorized";
import NotFound from "@/pages/notFound/NotFound";

export const router = createBrowserRouter([
  userRoutes,
  adminRoutes,
  {
    path: "/unauthorized",
    element: withSuspense(<Unauthorized />),
  },
  {
    path: "*",
    element: withSuspense(<NotFound />),
  },
]);
