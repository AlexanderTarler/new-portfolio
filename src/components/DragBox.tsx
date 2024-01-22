import React from "react";
import styles from "../styles/DragBox.module.css";

interface DragBoxProps {
  name: string;
  onDragStart: (name: string) => void;
}

const DragBox: React.FC<DragBoxProps> = ({ name, onDragStart }) => {
  const handleDragStart = (e: React.DragEvent) => {
    onDragStart(name);
    e.dataTransfer.setData("boxName", name);
  };

  return (
    <div className={styles.dragBox} draggable onDragStart={handleDragStart}>
      {name}
    </div>
  );
};

export default DragBox;
