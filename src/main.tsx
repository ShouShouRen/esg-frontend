import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
// AntD React 19 official compatibility patch
import "@ant-design/v5-patch-for-react-19";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
