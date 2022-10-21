import React from "react";
import {
  Sidebar,
  Menu,
  MenuItem,
  SubMenu,
  useProSidebar,
} from "react-pro-sidebar";
import { subCategory } from "../../data/subCat";
import { getParams } from "../config/Util";


const SideBar = () => {
  const { collapseSidebar } = useProSidebar();
  
  const category=getParams();
  

  return (
    <>
      
        <Sidebar>
          <Menu>
            {/* <SubMenu label="Charts">
              <MenuItem> Pie charts </MenuItem>
              <MenuItem> Line charts </MenuItem>
            </SubMenu> */}
            <MenuItem> Documentation-{category} </MenuItem>
            <MenuItem> Calendar </MenuItem>
          </Menu>
        </Sidebar>
      
      {/* <main>
        <button onClick={() => collapseSidebar()}>Collapse</button>
      </main> */}
    </>
  );
};

export default SideBar;
