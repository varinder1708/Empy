import React from "react";
import ReactDOM from "react-dom/client";
// import reportWebVitals from "./reportWebVitals";
import App from "./App";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { ProSidebarProvider } from "react-pro-sidebar";

import "./App.scss";
import QueryParams from "./config/QueryParams";

// const el = document.getElementById("app");

// ReactDOM.render(<App />, el);
const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(
  <React.StrictMode>
    <ProSidebarProvider>
      <Router>
        {/* <QueryParams> */}
          <App />
        {/* </QueryParams> */}
      </Router>
    </ProSidebarProvider>
  </React.StrictMode>
);

// reportWebVitals();
