import React from "react";
import {
  Sidebar,
  Menu,
  MenuItem,
  SubMenu,
  useProSidebar,
} from "react-pro-sidebar";
import { Link } from "react-router-dom";
import { subCategory_data } from "../../data/subCat";
import { getParamsfromurl, fetchAllSubCategories } from "../config/Util";

const SideBar = () => {
  const { collapseSidebar } = useProSidebar();

  const [categoryFromUrl] = getParamsfromurl();
 //based on category from url fetch all subcategorries from array
  return (
    <>
      <Sidebar>
        <Menu>
          {/* <SubMenu label="Charts">
              <MenuItem> Pie charts </MenuItem>
              <MenuItem> Line charts </MenuItem>
            </SubMenu> */}

          {fetchAllSubCategories(subCategory_data, categoryFromUrl).map(
            (data, key) => {
              return (
                <MenuItem>
                  <Link
                    to={"/" + data.cat + "/" + data.subc}
                    className="nav-link"
                  >
                    {categoryFromUrl} {data.subc}
                  </Link>
                </MenuItem>
              );
            }
          )}
          {/* <MenuItem> Documentation-{categoryFromUrl} </MenuItem>
          <MenuItem> Calendar </MenuItem> */}
        </Menu>
      </Sidebar>

      {/* <main>
        <button onClick={() => collapseSidebar()}>Collapse</button>
      </main> */}
    </>
  );
};

export default SideBar;
