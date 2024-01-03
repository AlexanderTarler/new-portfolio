// DraggableSquare component
import React, { useState } from "react";

const DraggableSquare = ({ onDrop }: any) => {
  const [isDragging, setIsDragging] = useState(false);

  const handleDragStart = (e: any) => {
    setIsDragging(true);
    // Explicitly setting the draggable attribute to true
    e.target.setAttribute("draggable", "true");
    e.dataTransfer.setData("text/plain", e.target.id);
  };

  const handleDragEnd = () => {
    setIsDragging(false);
  };

  return (
    <div
      id="draggable-square"
      draggable="true" // Ensure this element is draggable
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      style={{
        width: "60px",
        height: "60px",
        backgroundColor: "white",
        position: "absolute",
        cursor: isDragging ? "grabbing" : "grab",
        border: "1px solid black",
        top: "100px",
        left: "100px",
      }}
    />
  );
};

export default DraggableSquare;
