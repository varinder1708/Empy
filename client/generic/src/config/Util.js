import React from "react";
import {
  BrowserRouter as Router,
  Link,
  useLocation,
  useParams,
} from "react-router-dom";

export const getParams = () => {
  let { category } = useParams();
  console.log(category);
  return category;
};
