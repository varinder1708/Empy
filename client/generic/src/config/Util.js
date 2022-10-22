import React from "react";
import {
  BrowserRouter as Router,
  Link,
  useLocation,
  useParams,
} from "react-router-dom";

export const getParamsfromurl = (val) => {
  let { category:categoryFromUrl,subcategory:subcategoryFromUrl } = useParams();
  
  return [categoryFromUrl,subcategoryFromUrl];
  //return ["html","introduction"];
};

export const fetchAllSubCategories = (subCategory_data, category) => {
  return subCategory_data.filter((obj) => {
    return obj.cat === category;
  });
};
