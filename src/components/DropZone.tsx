// DropZone.tsx
import React from "react";
import styles from "../styles/DropZone.module.css";

interface DropZoneProps {
  expectedBox: string;
  onDrop: (boxName: string) => void;
}

const DropZone: React.FC<DropZoneProps> = ({ expectedBox, onDrop }) => {
  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const boxName = e.dataTransfer.getData("boxName");
    onDrop(boxName);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  return (
    <div
      className={styles.dropZone}
      onDrop={handleDrop}
      onDragOver={handleDragOver}
    >
      Place {expectedBox} here
    </div>
  );
};

export default DropZone;
