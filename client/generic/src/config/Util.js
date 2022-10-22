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

export const createMarkup = (text) => {
  return { __html: text };
};

export const getContentforCategoryandSubC=(content_data,categoryFromUrl,subcategoryFromUrl)=>{
  const content= content_data.filter(
    (obj) => obj.cat === categoryFromUrl && obj.subc === subcategoryFromUrl
  );
  return content && content[0] && content[0].content;
 }
