import React from "react";

const ResizableEdge = ({ edge, onResize }) => {
  const handleMouseDown = (event) => {
    // Calculate new width/height based on edge
    // Here, you should dispatch the action with the new width/height
  };

  return <span className={edge} onMouseDown={handleMouseDown}></span>;
};

export default ResizableEdge;
