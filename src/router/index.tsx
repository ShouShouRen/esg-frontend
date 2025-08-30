import PrivateRoute from "@/components/privateRoute";
import { Home, NotFound, UploadCarbon } from "@/pages";
import LoginSignup from "@/pages/Auth";
import CarbonTrading from "@/pages/CarbonTrading";
import AccountManagement from "@/pages/AccountManagement";

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
  {
    path: "/account",
    element: <PrivateRoute element={<AccountManagement />} />,
  },
];

export default routes;
