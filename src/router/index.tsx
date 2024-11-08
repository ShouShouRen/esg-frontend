import PrivateRoute from "@/components/privateRoute";
import { Home, NotFound, UploadCarbon } from "@/pages";
import LoginSignup from "@/pages/Auth";
import CarbonTrading from "@/pages/CarbonTrading";

const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
  {
    path: "/auth",
    element: <LoginSignup />,
  },
  {
    path: "/carbon-trading",
    element: <PrivateRoute element={<CarbonTrading />} />,
  },
  {
    path: "/upload-carbon",
    element: <PrivateRoute element={<UploadCarbon />} />,
  },
];

export default routes;
