import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";

function Marker({ isActive, title, address, onClick }) {
  return (
    <div className="marker-container" onClick={onClick}>
      <FaMapMarkerAlt
        style={{
          color: "red",
          width: `${isActive ? 100 : 34}`,
          height: `${isActive ? 100 : 60}`,
        }}
      />
      <div className={`tag ${isActive && "active"}`}>
        <span>{title}<br/>{isActive && address}</span>
      </div>
    </div>
  );
}

export default Marker;
