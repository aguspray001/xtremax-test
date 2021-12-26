import React from "react";
import {RiArrowDownSFill, RiArrowUpSFill} from "react-icons/ri";

function SideBarItem({title, subtitles, onClick, isActive, isBorder, isSecondary}) {
  const dropdownStyle = ["dropdown-content"];
  const dropdownButtonStyle = ["dropdown-btn"];
  if(isSecondary) dropdownButtonStyle.push("secondary");
  if(isBorder) dropdownButtonStyle.push("border-sm");
  if(isActive){
    dropdownButtonStyle.push("active");
    if(subtitles.length > 0){
      dropdownStyle.push("active");
    }
  };
  
  return (
    <div className="dropdown-container">
      <div className={dropdownButtonStyle.join(" ")} onClick={onClick}>
          <p>{title}</p>
          {subtitles?.length > 0 && (isActive ? <RiArrowUpSFill/> : <RiArrowDownSFill />) }
      </div>
      <ul className={dropdownStyle.join(" ")}>
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
