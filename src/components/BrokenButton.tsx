"use client";
import React, { useState } from "react";
import "animate.css";
import styles from "../styles/BrokenButton.module.css";

const BrokenButton = () => {
  const [isBroken, setIsBroken] = useState(false);

  const breakTheButton = () => {
    console.log("Button broken");
    setIsBroken(true);
  };

  const handleAnimationEnd = () => {
    const dontPart: any = document.querySelector(".dont-part");
    if (dontPart) {
      dontPart.style.display = "none"; // This will hide the "Don't" part
    }
  };

  return (
    <div>
      <button
        className={`${styles.broken__button} ${
          isBroken ? styles.glitched : ""
        }`}
        onClick={breakTheButton}
        disabled={isBroken}
      >
        <span className={isBroken ? styles.invisible : ""}>Don&apos;t</span>
        {isBroken ? "click here" : " click here"}
      </button>
      {isBroken && (
        <div
          className="animate__animated animate__hinge dont-part"
          onAnimationEnd={handleAnimationEnd}
        >
          Don&apos;t
        </div>
      )}
    </div>
  );
};

export default BrokenButton;
