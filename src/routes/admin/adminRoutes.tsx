import type { RouteObject } from "react-router-dom";
import {
  AdminLayout,
  AdminDashboard,
  AdminProducts,
  AdminOrders,
  AdminCustomers,
  AdminInventory,
  AdminSettings,
} from "../lazyRoutes/lazyRoutes";
import ProtectedRoute from "../protectedRoute/ProtectedRoute";
import { withSuspense } from "@/utils/WithSuspence";

const user: { role: any | null } = {
  role: "admin", // or "admin"
//   role: localStorage.getItem("role"),
};
export const adminRoutes: RouteObject = {
  path: "/admin",
  element: withSuspense(
    <ProtectedRoute userRole={user.role} allowedRoles={["admin"]}>
      <AdminLayout />
    </ProtectedRoute>
  ),
  children: [
    { index: true, element: withSuspense(<AdminDashboard />) },
    { path: "products", element: withSuspense(<AdminProducts />) },
    { path: "orders", element: withSuspense(<AdminOrders />) },
    { path: "customers", element: withSuspense(<AdminCustomers />) },
    { path: "inventory", element: withSuspense(<AdminInventory />) },
    { path: "settings", element: withSuspense(<AdminSettings />) },
  ],
};
