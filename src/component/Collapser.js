import React from "react";

function Collapser({ collapse, setCollapse, title, children }) {
  return (
    <div>
      <button
        className={"collapsible"}
        onClick={() => setCollapse(!collapse)}
        style={{ fontSize: "20px", cursor: "pointer" }}
      >
        {title}
      </button>

      <div
        className={"content"}
        style={{ display: collapse ? "block" : "none" }}
      >
        {children}
      </div>

      <div
        style={{ background: "grey", height: "2px", marginTop: "5px" }}
      ></div>
    </div>
  );
}

export default Collapser;
