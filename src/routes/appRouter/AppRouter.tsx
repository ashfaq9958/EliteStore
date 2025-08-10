import { RouterProvider } from "react-router-dom";
import { router } from "../routerConfig/routerConfig";

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
