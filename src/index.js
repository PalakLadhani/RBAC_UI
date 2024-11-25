import React from "react";
import ReactDOM from "react-dom/client";
import "antd/dist/reset.css"; // Import Ant Design CSS
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
