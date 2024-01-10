"use client";
import React, { useEffect, useState } from "react";
import "animate.css";
import styles from "../styles/BrokenButton.module.css";
import MatrixAnimation from "./MatrixAnimation";

const BrokenButton = () => {
  const [isBroken, setIsBroken] = useState(false);
  const [isGlitching, setIsGlitching] = useState(false);
  const [clickCount, setClickCount] = useState(0);
  const [warningText, setWarningText] = useState("");
  const [shouldFall, setShouldFall] = useState(false);
  const maxIntensity = 3;

  const breakTheButton = () => {
    setIsBroken(true); // Set the button to broken the first time it's clicked
    setClickCount((prevCount) => {
      const newCount = prevCount + 1;
      console.log("clickCount", clickCount);
      warningTextSystem();

      if (newCount > 6) {
        setShouldFall(true); // Trigger the fall and disappear animation
      }
      setIsGlitching(newCount > 0); // If newCount is greater than 0, start glitching
      return newCount; // Return the new count to update the state
    });
  };

  useEffect(() => {
    if (shouldFall) {
      // Select only the children of a specific container
      const container = document.querySelector(
        ".ProjectDisplay_project__display__YlG_l"
      );
      console.log(container);
      if (container) {
        container.querySelectorAll("div").forEach((el) => {
          el.classList.add("fallAndDisappear");
        });
      }
    }
  }, [shouldFall]);

  const handleAnimationEnd = () => {
    const dontPart = document.querySelector(".dont-part");
    if (dontPart) {
      const dontPart = document.querySelector(".dont-part") as HTMLElement;
      dontPart.style.display = "none";
    }
  };

  // Determines the glitch intensity class based on click count
  const getGlitchIntensityClass = () => {
    if (clickCount > 0 && clickCount <= maxIntensity) {
      return `glitch-intensity-${clickCount}`;
    }
    return "";
  };

  const warningTextSystem = () => {
    if (clickCount > 2) {
      setWarningText("Unstable code, please refrain from clicking.");
    }
    if (clickCount > 4) {
      setWarningText("Stop clicking, you're going to break the site.");
    }
    if (clickCount > 6) {
      setWarningText("See what you did? You broke it. Now it's broken. Great.");
    }
  };

  return (
    <div className={styles.broken__button__general}>
      <button
        className={`${styles.broken__button} ${
          isGlitching ? styles.glitched : ""
        } ${getGlitchIntensityClass()} ${shouldFall ? "fallAndDisappear" : ""}`}
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
      <p className={`${shouldFall ? "fallAndDisappear" : ""}`}>{warningText}</p>
    </div>
  );
};

export default BrokenButton;
