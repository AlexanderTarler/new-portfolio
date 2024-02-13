"use client";
import React, { useContext, useState, useEffect } from "react";
import { MyContext } from "@/context/context";
import styles from "../styles/BackgroundPieces.module.css";

const BackgroundPieces = () => {
  const { globalState, updateGlobalState } = useContext<any>(MyContext);
  const [fallStatus, setFallStatus] = useState(Array(8).fill(false)); // State to track falling status of each piece
  const [visibility, setVisibility] = useState(true);

  useEffect(() => {
    if (globalState.brokenBackground) {
      setVisibility(false);
    }
    if (globalState.firstItemFall) {
      const timers = fallStatus.map(
        (_, index) =>
          setTimeout(() => {
            setFallStatus((prev) => {
              const newStatus = [...prev];
              newStatus[index] = true;
              return newStatus;
            });
          }, Math.random() * 2000) // Random delay between 0 and 2 seconds
      );
      setTimeout(() => {
        updateGlobalState({ brokenBackground: true });
      }, 4000);
      return () => {
        timers.forEach(clearTimeout); // Cleanup timeouts
      };
    }
  }, [globalState.firstItemFall]);

  return (
    <div className={styles.bgContainer}>
      {visibility &&
        fallStatus.map((shouldFall, index) => (
          <div
            key={`bg-piece-${index + 1}`}
            className={`${styles.bgPiece} ${styles[`bg-piece-${index + 1}`]} ${
              shouldFall ? styles.fall : ""
            }`}
          />
        ))}
    </div>
  );
};

export default BackgroundPieces;
