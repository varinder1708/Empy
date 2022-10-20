import React, { useContext } from "react";
import {
  BrowserRouter as Router,
  Link,
  useLocation,
  useParams,
} from "react-router-dom";

const Content = () => {
  let { category } = useParams();
  console.log(category);

  return <>content-{category}</>;
};

export default Content;
