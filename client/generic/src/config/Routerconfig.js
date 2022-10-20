import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Notfound from "../components/Notfound";
import Content from "../Content";


const Routerconfig = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Content />}></Route>
        <Route exact path="/:category" element={<Content/>}></Route>
        <Route path="*" element={<Notfound/>}>
        </Route>
      </Routes>
    </>
  );
};

export default Routerconfig;
