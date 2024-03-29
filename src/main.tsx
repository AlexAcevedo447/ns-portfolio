import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import "./index.css";

const root = document.getElementById("root") as HTMLElement;
const rootContainer = ReactDOM.createRoot(root);
rootContainer.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
