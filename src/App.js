import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";

import { Container, Row, Col } from "react-bootstrap";
import React from "react";

import SideBar from "./components/SideBar";
import Footer from "./components/Footer";
import Routerconfig from "./config/Routerconfig";
const App = () => {
  return (
    <>
      <div>
        <Row>
          <Col>
            <Header />
          </Col>
        </Row>
        <div style={{ display: "flex", height: "100%" }}>
          <SideBar />
          <Routerconfig />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default App;
