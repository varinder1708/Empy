import React from "react";
import { content_data } from "../../data/Content";
import { getParamsfromurl } from "../config/Util";

const Middle = () => {
  const [categoryFromUrl, subcategoryFromUrl] = getParamsfromurl();
  const createMarkup=(text)=> { return {__html: text}; };
  const content = content_data.filter(
    (obj) => obj.cat === categoryFromUrl && obj.subc === subcategoryFromUrl
    // console.log(obj.cat);console.log(obj.subc);
    // console.log("-------")
    // console.log(categoryFromUrl);
    // console.log(subcategoryFromUrl);
    // console.log("9999999999999");
    // console.log(content);
  );
  const data = content && content[0] && content[0].content;
  return <>
   <div dangerouslySetInnerHTML={createMarkup(data)} />
  </>;
};

export default Middle;
