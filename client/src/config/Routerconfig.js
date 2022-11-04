import React from "react";
import { Routes, Route } from "react-router-dom";
// import { renderRoutes } from "react-router-config";

import Notfound from "../components/Notfound";
import Content from "../Layout/Content";
// import RoutesContent from "./RoutesContent";
const Routerconfig = () => {
  return (
    // <>{renderRoutes(RoutesContent)}</>
    <Routes>
      <Route exact path="/:category/:subcategory" element={<Content />}></Route>
      <Route exact path="/:category" element={<Content />}></Route>
      <Route exact path="/" element={<Content />}></Route>

      <Route path="*" element={<Notfound />}></Route>
    </Routes>
  );
};

export default Routerconfig;
