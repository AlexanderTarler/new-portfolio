import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import DragBox from "./DragBox";
import DropZone from "./DropZone";
import styles from "../styles/PuzzleGame.module.css";

const PuzzleGame = () => {
  const [correctPlacements, setCorrectPlacements] = useState<string[]>([]);
  const router = useRouter();

  const handleCorrectDrop = (boxName: string) => {
    if (!correctPlacements.includes(boxName)) {
      setCorrectPlacements([...correctPlacements, boxName]);
    }
  };

  useEffect(() => {
    if (correctPlacements.length === 5) {
      // Assuming there are 5 boxes
      // Start loading bar animation
      // After loading bar animation completes...
      setTimeout(() => {
        alert("Well done, restarting the website...");
        router.push("/"); // Redirect to homepage
      }, 3000); // Wait for 3 seconds
    }
  }, [correctPlacements, router]);

  //  DragBox and DropZone components here
};

export default PuzzleGame;
