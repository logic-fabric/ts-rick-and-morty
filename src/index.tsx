import React from "react";
import ReactDOM from "react-dom/client";

import { HomePage } from "./pages/Home/HomePage";

import { StoreProvider } from "./store/provider";

import "./css/index.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <StoreProvider>
      <HomePage />
    </StoreProvider>
  </React.StrictMode>
);
