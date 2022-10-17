import "bootstrap/dist/css/bootstrap.min.css";
import CollapsibleExample from "./components/NavBarCustom";
import React from "react";
import { ProSidebarProvider } from 'react-pro-sidebar';

import SideBar from "./components/SideBar";
const App = () => {
  return (
    <>
      <div>
        <CollapsibleExample />
        <SideBar/>
      </div>
    </>
  );
};

export default App;
