import { lazy } from "react";

// User Module Pages
export const UserLayout = lazy(() => import("@/layouts/UserLayout"));
export const Home = lazy(() => import("@/pages/user/Index"));
export const Shop = lazy(() => import("@/pages/user/Shop"));
export const Cart = lazy(() => import("@/pages/user/Cart"));
export const FAQ = lazy(() => import("@/pages/user/FAQ"));
export const About = lazy(() => import("@/pages/user/About"));
export const Contact = lazy(() => import("@/pages/user/Contact"));
export const Checkout = lazy(() => import("@/pages/user/Checkout"));
export const Categories = lazy(() => import("@/pages/user/Categories"));
export const ProductDetails = lazy(() => import("@/pages/user/ProductDetails"));

// Admin Module Pages
export const AdminLayout = lazy(() => import("@/layouts/AdminLayout"));
export const AdminDashboard = lazy(() => import("@/pages/admin/Dashboard"));
export const AdminProducts = lazy(() => import("@/pages/admin/Products"));
export const AdminOrders = lazy(() => import("@/pages/admin/Orders"));
export const AdminCustomers = lazy(() => import("@/pages/admin/Customers"));
export const AdminInventory = lazy(() => import("@/pages/admin/Inventory"));
export const AdminSettings = lazy(() => import("@/pages/admin/Settings"));
