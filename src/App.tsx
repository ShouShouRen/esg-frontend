import { BrowserRouter, Routes, Route } from "react-router-dom";
import routes from "./router";
import { App as AntdApp, ConfigProvider, theme } from "antd";
import MessageBinder from "./app/MessageBinder";
import "antd/dist/reset.css";
import "./style/tailwind.css";
import "./style/index.scss";

const AppRoutes = () => {
  return (
    <Routes>
      {routes.map((route, index) => (
        <Route key={index} path={route.path} element={route.element} />
      ))}
    </Routes>
  );
};

const App = () => {
  return (
    <ConfigProvider
      theme={{
        algorithm: theme.defaultAlgorithm,
        token: {
          colorPrimary: "#10b981",
        },
      }}
    >
      <AntdApp>
        <MessageBinder />
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </AntdApp>
    </ConfigProvider>
  );
};

export default App;
