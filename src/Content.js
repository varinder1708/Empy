import React,{ useContext } from 'react';
import {
    BrowserRouter as Router,
    Link,
    useLocation,
    useParams,
  } from "react-router-dom";

const Content = () => {
    const obj = useLocation();
    return (
        <>
            Content 
        </>
    );
}

export default Content;
