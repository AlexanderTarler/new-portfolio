"use client";
import React, { useState } from "react";
import MatrixAnimation from "../components/MatrixAnimation";
import DropZone from "@/components/DropZone";
import DraggableSquare from "@/components/DraggableSquare";
import "./globals.css";

const LandingPage = () => {
  const [squarePlaced, setSquarePlaced] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [isDoorOpened, setIsDoorOpened] = useState(false);
  const [isDisrupted, setIsDisrupted] = useState(false);

  const handleClick = () => {
    if (!isClicked) setIsClicked(true); // This will trigger the "Don't" part falling off

    // For the "Click" part interaction
    if (isClicked) {
      setIsDoorOpened(true);
    }
  };

  const handleMatrixClick = () => {
    setIsDisrupted(true);
    setTimeout(() => setIsDisrupted(false), 500); // Effect lasts for half a second
  };

  const styleSheet = document.createElement("style");
  styleSheet.type = "text/css";
  styleSheet.innerText = `
    .hidden {
      visibility: hidden;
    }
    // ... existing styles ...
  `;
  document.head.appendChild(styleSheet);

  const handleSquareDrop = () => {
    // Assume there is a state defined as [squarePlaced, setSquarePlaced] to track if the square has been placed.
    setSquarePlaced(true); // This would indicate the white square has been dropped on the target.

    // Trigger any visual effects or state changes as needed.
    setIsDisrupted(true); // This can trigger a disrupted effect when the square is dropped.

    // This is where you would add additional logic to "repair" the website.
    // For example, if you want to hide the matrix square, you could:
    setIsDoorOpened(false); // If you have a state to track the "door" or the matrix effect, you can set it to false to hide it.

    // Any other state updates or side effects that need to occur when the square is dropped can go here.
  };

  return (
    <div className={isDisrupted ? "disrupted" : ""}>
      <h1 className="landing-page-element">Welcome to my Portfolio</h1>
      <p className="landing-page-element">
        This is the landing page of my portfolio website.
      </p>
      <div className="landing-page-element">
        <button onClick={handleClick} className={isClicked ? "clicked" : ""}>
          <span className="dont landing-page-element">Don&apos;t</span>{" "}
          <span className="click landing-page-element">Click</span>
        </button>
      </div>
      {/* Conditional rendering based on squarePlaced */}
      {!squarePlaced && isDoorOpened && (
        <>
          <DraggableSquare onDrop={handleSquareDrop} />
          <DropZone onDrop={handleSquareDrop}>
            <MatrixAnimation onClick={handleMatrixClick} />
          </DropZone>
        </>
      )}
      <style jsx>{`
        .disrupted {
          animation: shake 0.5s, flicker 0.15s infinite;
        }
        @keyframes shake {
          0%,
          100% {
            transform: translateX(0);
          }
          10%,
          30%,
          50%,
          70% {
            transform: translateX(-10px);
          }
          20%,
          40%,
          60%,
          80% {
            transform: translateX(10px);
          }
        }
        @keyframes flicker {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
        }
      `}</style>
    </div>
  );
};

export default LandingPage;
