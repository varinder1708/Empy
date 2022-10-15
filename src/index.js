import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import "./App.scss";

// const el = document.getElementById("app");

// ReactDOM.render(<App />, el);
const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();