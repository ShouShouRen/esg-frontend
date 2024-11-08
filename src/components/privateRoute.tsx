import { Navigate } from "react-router-dom";

import { ReactElement } from "react";

interface PrivateRouteProps {
  element: ReactElement;
}

// 定義 PrivateRouteProps 介面，它包含一個 element 屬性，型別為 ReactElement
const PrivateRoute = ({ element }: PrivateRouteProps) => {
  // 從 localStorage 取得 token，並將其轉換為布林值
  const isAuthenticated = !!localStorage.getItem("token");

  return isAuthenticated ? element : <Navigate to="/auth" replace />;
};

export default PrivateRoute;
