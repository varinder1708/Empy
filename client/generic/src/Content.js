import React, { useContext } from "react";
import {
  BrowserRouter as Router,
  Link,
  useLocation,
  useParams,
} from "react-router-dom";
import SideBar from "./components/SideBar";
import { getParams } from "./config/Util";

const Content = () => {
  //let { category } = useParams();
  const category = getParams();
  console.log(category);

  return (
    <>
      <SideBar />
      content-{category}
    </>
  );
};

export default Content;
