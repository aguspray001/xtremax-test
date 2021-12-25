import React, { useState } from "react";
import SideBarItem from "../atoms/SideBarItem";

import { dataFilterSideBar, dataSideBar } from "src/constant";
import MenuItem from "../atoms/MenuItem";

function SideBar() {
  const [selectedBarItem, setSelectedBarItem] = useState({
    title: "",
    status: false,
  });
  const [openSideMenu, setOpenSideMenu] = useState({ title: "", status: false });
  const [openFilter, setOpenFilter] = useState(false);

  return (
    <div className="sidebar-container">
      <div className="main-menu">
        <MenuItem
          title="World"
          isActive={openSideMenu.title === "world" && openSideMenu.status}
          onClick={() =>
            setOpenSideMenu({ title: "world", status: !openSideMenu.status })
          }
        />
        <MenuItem title="suggest" />
        <MenuItem title="Videos" />
        <MenuItem title="Blog" />
        <MenuItem title="About" />
      </div>
      <div
        className={`${!openSideMenu.status ? "side-menu active" : "side-menu"}`}
      >
        <SideBarItem
          isBorder={true}
          title="Filter by favorite"
          subtitles={dataFilterSideBar.subTitle}
          isActive={openFilter}
          isSecondary={true}
          onClick={()=>setOpenFilter((open)=>!open)}
        />
        {dataSideBar?.map((v, key) => (
          <SideBarItem
            key={`${v.title}-${key}`}
            title={v.title}
            subtitles={v.subTitle}
            onClick={() =>
              setSelectedBarItem({
                title: v.title,
                status: !selectedBarItem.status,
              })
            }
            isActive={selectedBarItem.title === v.title}
          />
        ))}
      </div>
    </div>
  );
}

export default SideBar;
