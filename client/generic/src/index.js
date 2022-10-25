import React from "react";
import ReactDOM from "react-dom/client";
// import reportWebVitals from "./reportWebVitals";
import App from "./App";

import "./App.scss";
import QueryParams from "./config/QueryParams";

// const el = document.getElementById("app");

// ReactDOM.render(<App />, el);
const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(<App />);

// reportWebVitals();
