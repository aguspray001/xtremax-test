import React from "react";
import { AiFillInfoCircle, AiFillYoutube } from "react-icons/ai";
import { BiWorld } from "react-icons/bi";
import {MdOutlineSpeakerNotes} from "react-icons/md";
import {GiLion} from "react-icons/gi"

function MenuItem({ title, onClick, isActive}) {
  const iconComponent = () => {
    const isTitle = title.toLowerCase();
    if (isTitle === "world") {
      return <BiWorld style={{ width: 30, height: 30 }} />;
    }
    if (isTitle === "videos") {
      return <AiFillYoutube style={{ width: 30, height: 30 }} />;
    }
    if (isTitle === "about") {
      return <AiFillInfoCircle style={{ width: 30, height: 30 }} />;
    }
    if (isTitle === "blog") {
      return <MdOutlineSpeakerNotes style={{ width: 30, height: 30 }} />;
    } else {
      return <GiLion style={{ width: 30, height: 30 }} />;
    }
  };
  return (
    <button className={`${isActive && "active"}`} onClick={onClick}>
      {iconComponent()}
      <p>{title.toLowerCase()==="suggest"? "Suggest\nAttraction": title}</p>
    </button>
  );
}

export default MenuItem;
