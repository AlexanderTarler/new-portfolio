"use client";
import React from "react";
import styles from "../styles/BackgroundPieces.module.css";

const BackgroundPieces = () => {
  const pieces = Array.from({ length: 8 }, (_, index) => index + 1);

  return (
    <div className={styles.bgContainer}>
      {pieces.map((piece) => (
        <div
          key={`bg-piece-${piece}`}
          className={`${styles.bgPiece} ${styles[`bg-piece-${piece}`]}`}
        />
      ))}
    </div>
  );
};

export default BackgroundPieces;
