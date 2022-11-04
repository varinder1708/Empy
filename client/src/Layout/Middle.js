import React from "react";
import { content_data } from "../data/Content";
import {
  getParamsfromurl,
  createMarkup,
  getContentforCategoryandSubC,
} from "../config/Util";

const Middle = () => {
  const [categoryFromUrl, subcategoryFromUrl] = getParamsfromurl();
  //get category and subc from url and load content from array
  const data = getContentforCategoryandSubC(
    content_data,
    categoryFromUrl,
    subcategoryFromUrl
  );

  return (
    <>
      <div className="container mb-4 mt-4" dangerouslySetInnerHTML={createMarkup(data)} />
    </>
  );
};

export default Middle;
