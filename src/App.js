import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import React from "react";
import SideBar from "./components/SideBar";
import Footer from "./components/Footer";
const App = () => {
  return (
    <>
      <div>
        <Header />
        <SideBar/>
        <Footer/>
      </div>
    
    </>
  );
};

export default App;
