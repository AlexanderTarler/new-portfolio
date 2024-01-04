const DropZone = ({
  children,
  onDrop,
}: {
  children: React.ReactNode;
  onDrop: () => void;
}) => {
  const handleDragOver = (e: any) => {
    e.preventDefault(); // Necessary to allow the drop
  };

  const handleDrop = (e: any) => {
    e.preventDefault();
    const droppedItem = e.dataTransfer.getData("text/plain");
    if (droppedItem === "draggable-square") {
      onDrop();
    }
  };

  return (
    <div
      onDrop={handleDrop}
      onDragOver={handleDragOver}
      style={{
        width: "60px",
        height: "60px",
        position: "absolute",
        // Position corresponding to the "matrix square"
      }}
    >
      {children}
    </div>
  );
};

export default DropZone;
