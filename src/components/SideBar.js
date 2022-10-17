import React from "react";
import { Sidebar, Menu, MenuItem, SubMenu, useProSidebar } from "react-pro-sidebar";


const SideBar = () => {

    const { collapseSidebar } = useProSidebar();

  return (
    <> <div style={{ display: 'flex', height: '100%' }}>
      <Sidebar>
        <Menu iconShape="square">
          <SubMenu label="Charts">
            <MenuItem> Pie charts </MenuItem>
            <MenuItem> Line charts </MenuItem>
          </SubMenu>
          <MenuItem> Documentation </MenuItem>
          <MenuItem> Calendar </MenuItem>
        </Menu>
      </Sidebar>
      </div>
      {/* <main>
        <button onClick={() => collapseSidebar()}>Collapse</button>
      </main> */}
    </>
  );
};

export default SideBar;
