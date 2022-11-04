import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";

import { Container, Row, Col } from "react-bootstrap";
import React from "react";
import { ProSidebarProvider } from "react-pro-sidebar";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import SideBar from "./Layout/Leftnav";
import Footer from "./components/Footer";
import Routerconfig from "./config/Routerconfig";
const App = () => {
  console.log("in App.js is Browser-", __isBrowser__);
  const showheader = __isBrowser__ ? true : false;

  return (
    <>
      <React.StrictMode>
        <ProSidebarProvider>
          {/* <Router> */}
          {/* <QueryParams> */}
          <div>
            <Row className="g-0">
              <Col>
                {__isBrowser__ ? <Header /> : <Header />}

                {/* <Header /> */}
              </Col>
            </Row>
            <div style={{ display: "flex", height: "100%" }}>
              {__isBrowser__ ? <Routerconfig /> : <Routerconfig />}
            </div>
            <Footer />
          </div>
          {/* </QueryParams> */}
          {/* </Router> */}
        </ProSidebarProvider>
      </React.StrictMode>
    </>
  );
};

export default App;
{
  /*className="g-0" using classname to remove gutter space , horizontal scrollbar coming */
}
