import React from "react";
import ReactDOM from "react-dom/client";
// import reportWebVitals from "./reportWebVitals";
import App from "./App";
import { ProSidebarProvider } from 'react-pro-sidebar';

import "./App.scss";

// const el = document.getElementById("app");

// ReactDOM.render(<App />, el);
const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(
  <React.StrictMode>
    <ProSidebarProvider>
    <App />
    </ProSidebarProvider>
  </React.StrictMode>
);

// reportWebVitals();