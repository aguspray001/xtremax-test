import React from "react";
import {RiArrowDownSFill, RiArrowUpSFill} from "react-icons/ri";

function SideBarItem({title, subtitles, onClick, isActive, isBorder, isSecondary}) {
  const dropdownStyle = isActive && subtitles.length > 0 ? "dropdown-content active" : "dropdown-content";
  const dropdownButtonStyle = isActive ? [`dropdown-btn active ${isBorder && "border-sm"}`] : [`dropdown-btn ${isBorder && "border-sm"}`];
  if(isSecondary) dropdownButtonStyle.push("secondary");
  
  return (
    <div className="dropdown-container">
      <div className={dropdownButtonStyle.join(" ")} onClick={onClick}>
          <p>{title}</p>
          {subtitles?.length > 0 && (isActive ? <RiArrowUpSFill/> : <RiArrowDownSFill />) }
      </div>
      <ul className={dropdownStyle}>
        { subtitles?.length > 0 &&
          subtitles?.map((sub, key)=>(
            <li key={`${sub.title}-${key}`}>{sub.title}</li>
          ))
        }
      </ul>
    </div>
  );
}

export default SideBarItem;
