"use client";
import React, { useState } from "react";
import "animate.css";
import styles from "../styles/BrokenButton.module.css";

const BrokenButton = () => {
  const [isBroken, setIsBroken] = useState(false);
  const [isGlitching, setIsGlitching] = useState(false);
  const [clickCount, setClickCount] = useState(0);
  const maxIntensity = 3;

  const breakTheButton = () => {
    if (!isBroken) {
      setIsBroken(true);
      return;
    }
    if (clickCount) setIsGlitching(true);
    if (isBroken) setClickCount((prevCount) => prevCount + 1);
    console.log(clickCount);
  };

  const handleAnimationEnd = () => {
    const dontPart = document.querySelector(".dont-part");
    if (dontPart) {
      const dontPart = document.querySelector(".dont-part") as HTMLElement;
      dontPart.style.display = "none";
    }
  };

  // Determine the glitch intensity class based on click count
  const getGlitchIntensityClass = () => {
    if (clickCount > 0 && clickCount <= maxIntensity) {
      return `glitch-intensity-${clickCount}`;
    }
    return "";
  };

  return (
    <div className={styles.broken__button__general}>
      <button
        className={`${styles.broken__button} ${
          isGlitching ? styles.glitched : ""
        } ${getGlitchIntensityClass()}`}
        onClick={breakTheButton}
      >
        <span className={isBroken ? styles.invisible : ""}>Don&apos;t</span>
        {isBroken ? "click here" : " click here"}
      </button>
      {isBroken && (
        <div
          className={`${styles.dont__part} animate__animated animate__hinge`}
          onAnimationEnd={handleAnimationEnd}
        >
          Don&apos;t
        </div>
      )}
      {clickCount > maxIntensity && (
        <p>Unstable code, please refrain from clicking</p>
      )}
    </div>
  );
};

export default BrokenButton;
