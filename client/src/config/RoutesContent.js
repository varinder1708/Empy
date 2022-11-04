
import React from "react";
import Notfound from '../components/Notfound';
import Content from "../Layout/Content";

export default [
  {
    routes: [
      {
        ...Content,
        path: '/',
        exact: true
      },
      {
        path: '/:category',
        ...Content
      },
      {
        ...Notfound
      }
    ]
  }
];


{/* <Routes>
<Route exact path="/:category/:subcategory" element={<Content />}></Route>
<Route exact path="/:category" element={<Content />}></Route>
<Route exact path="/" element={<Content />}></Route>

<Route path="*" element={<Notfound />}></Route>
</Routes> */}
