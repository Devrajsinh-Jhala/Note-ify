import React, { useState } from "react";
import { BsPlusCircleFill } from "react-icons/bs";
import "./Sidebar.css";

const Sidebar = (props) => {
  const [isListOpen, setIsListOpen] = useState(false);
  const colors = [
    "#cc3300",
    "#ffcc00",
    "#33cc33",
    "#9966ff",
    "#66ccff",
    "#ff99cc",
  ];
  return (
    <div className="sidebar">
      <BsPlusCircleFill
        onClick={() => setIsListOpen(!isListOpen)}
        style={{
          height: "30px",
          width: "30px",
          cursor: "pointer",
          position: "relative",
          // position: "fixed",
        }}
      />
      <ul className={`sidebar-list ${isListOpen ? "sidebar-list-active" : ""}`}>
        {colors.map((item, index) => (
          <li
            onClick={() => props.addNote(item)}
            key={index}
            className="sidebar-list-item"
            style={{
              backgroundColor: item,
              cursor: "pointer",
            }}
          ></li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
