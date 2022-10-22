import React, { useContext } from "react";
import {
  BrowserRouter as Router,
  Link,
  useLocation,
  useParams,
} from "react-router-dom";
import SideBar from "./SideBar";
import { getParamsfromurl } from "../config/Util";
import Middle from "./Middle";

const Content = () => {
  //let { category } = useParams();
  const [categoryFromUrl, subcategoryFromUrl] = getParamsfromurl();

  return (
    <>
      <SideBar />
      <Middle />
    </>
  );
};

export default Content;
