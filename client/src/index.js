import React from "react";
import ReactDOM from "react-dom/client";
//import ReactDOM from "react-dom";
// import reportWebVitals from "./reportWebVitals";
import App from "./App";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.scss";
import QueryParams from "./config/QueryParams";

 const el = document.getElementById("app");

// ReactDOM.render(<App />, el);
//ReactDOM.hydrate(<Router><App /></Router>, el);
//const root = ReactDOM.hydrate(<Router><App /></Router>,document.getElementById("app"));
//root.render();
const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(<Router><App /></Router>);
//root.render(<App />);
// reportWebVitals();
