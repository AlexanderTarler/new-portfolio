"use client";
import React, { useContext, useEffect, useState } from "react";
import "animate.css";
import Image from "next/image";
import styles from "../styles/BrokenButton.module.css";
import { MyContext } from "@/context/context";

const BrokenButton = () => {
  const [isBroken, setIsBroken] = useState(false);
  const [isGlitching, setIsGlitching] = useState(false);
  const [clickCount, setClickCount] = useState(0);
  const [warningText, setWarningText] = useState("");
  const [shouldFall, setShouldFall] = useState(false);
  const [crackImage, setCrackImage] = useState<any>("");
  const [showCracks, setShowCracks] = useState(false);
  const [shakeEffect, setShakeEffect] = useState<any>("");
  const { globalState, updateGlobalState, test, setTest } =
    useContext<any>(MyContext);

  const maxIntensity = 3;

  const breakTheButton = () => {
    setIsBroken(true);
    setClickCount((prevCount) => {
      const newCount = prevCount + 1;
      console.log("clickCount", clickCount);
      warningTextSystem();

      setIsGlitching(newCount > 0);
      return newCount;
    });
  };

  useEffect(() => {
    if (shouldFall) {
      updateGlobalState({ isBroken: true });
      console.log("globalState", globalState);
    }
  }, [shouldFall]);

  useEffect(() => {
    if (globalState.isBroken) {
      console.log("globalState.isBroken", globalState.isBroken);
    }
  }, [globalState]);

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
    if (clickCount > 1) {
      setWarningText("Unstable code, please refrain from clicking.");
      setCrackImage("/images/cracks_1.png");
      setShakeEffect("animate__animated animate__headShake");
      setShowCracks(true);
    }
    if (clickCount > 2) {
      setCrackImage("/images/cracks_2.png");
      setShakeEffect("");
      setShakeEffect("animate__animated animate__shakeX animate__faster");
    }
    if (clickCount > 3) {
      setCrackImage("/images/cracks_3.png");
      setShakeEffect("animate__animated animate__headShake");
    }
    if (clickCount > 4) {
      setWarningText("Stop clicking, you're going to break the site.");
      setShakeEffect("animate__animated animate__shakeX animate__faster");

      setCrackImage("/images/cracks_4.png");
    }
    if (clickCount > 5) {
      setCrackImage("/images/cracks_5.png");
      setShakeEffect("animate__animated animate__headShake");
    }
    if (clickCount > 6) {
      setWarningText("See what you did? You broke it. Now it's broken. Great.");
      setShakeEffect("animate__animated animate__shakeX animate__faster");

      setCrackImage("/images/cracks_6.png");
    }
  };

  return (
    <div className={`${styles.broken__button__general} ${shakeEffect}`}>
      <button
        className={`${styles.broken__button} ${
          isGlitching ? styles.glitched : ""
        } ${getGlitchIntensityClass()} ${shouldFall ? "fallAndDisappear" : ""}`}
        onClick={breakTheButton}
        onAnimationEnd={() => setIsGlitching(false)}
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
      {showCracks && (
        <Image
          src={crackImage}
          alt="cracks"
          width={600}
          height={600}
          layout="intrinsic"
          className={styles.cracks}
        />
      )}
    </div>
  );
};

export default BrokenButton;
