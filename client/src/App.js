import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";

import { Container, Row, Col } from "react-bootstrap";
import React from "react";
import { ProSidebarProvider } from "react-pro-sidebar";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import SideBar from "./Layout/SideBar";
import Footer from "./components/Footer";
import Routerconfig from "./config/Routerconfig";
const App = () => {
  return (
    <>
      <React.StrictMode>
        <ProSidebarProvider>
          <Router>
            {/* <QueryParams> */}
            <div>
              <Row>
                <Col>
                  <Header />
                </Col>
              </Row>
              <div style={{ display: "flex", height: "100%" }}>
                <Routerconfig />
              </div>
              <Footer />
            </div>
            {/* </QueryParams> */}
          </Router>
        </ProSidebarProvider>
      </React.StrictMode>
    </>
  );
};

export default App;
