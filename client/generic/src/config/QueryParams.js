import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Link,
  useLocation,
  useParams,
} from "react-router-dom";
import { Context } from "../config/Context";

const QueryParams = (props) => {
  const obj = useLocation();
  const category = obj.pathname.replace("/", "");

  return <Context.Provider value={category}>{props.children}</Context.Provider>;
};

export default QueryParams;
