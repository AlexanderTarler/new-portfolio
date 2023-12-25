import React, { useRef, useEffect, useState } from "react";

// CSS for Pixel Art
const pixelArtStyle: any = {
  boxShadow:
    "100px 10px 0 0 rgba(0, 0, 0, 1), 110px 10px 0 0 rgba(0, 0, 0, 1), 120px 10px 0 0 rgba(0, 0, 0, 1), 90px 20px 0 0 rgba(0, 0, 0, 1), /* ... Remaining box-shadow styles ... */",
  height: "10px",
  width: "10px",
  position: "absolute",
  top: "50px", // Adjust these values to position the pixel art next to the canvas
  left: "550px", // Adjust these values to position the pixel art next to the canvas
};

const MatrixAnimation: React.FC<{ onClick: () => void }> = ({ onClick }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [showPixelArt, setShowPixelArt] = useState(false);
  const [repairmanText, setRepairmanText] = useState("");
  const [repairmanVisible, setRepairmanVisible] = useState(false);
  const [clickCount, setClickCount] = useState(0);
  const [hideAll, setHideAll] = useState(false); // New state for hiding all elements

  interface ISymbol {
    x: number;
    y: number;
    value: string;
    speed: number;
    draw: (ctx: CanvasRenderingContext2D) => void;
  }

  class Symbol implements ISymbol {
    x: number;
    y: number;
    value: string;
    speed: number;

    constructor(x: number, y: number, speed: number) {
      this.x = x;
      this.y = y;
      this.value = this.getRandomSymbol();
      this.speed = speed;
    }

    draw(ctx: CanvasRenderingContext2D) {
      ctx.fillStyle = "limegreen";
      ctx.font = `100px monospace`;
      ctx.fillText(this.value, this.x, this.y);
      this.y = this.y > ctx.canvas.height ? 0 : this.y + this.speed;
      this.value = this.getRandomSymbol();
    }

    getRandomSymbol() {
      return String.fromCharCode(0x30a0 + Math.round(Math.random() * 96));
    }
  }

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = 300; // Set the desired width
    canvas.height = 600; // Set the desired height
    const symbolSize = 100;
    const columns = canvas.width / symbolSize;
    let doorWidth = canvas.width / 2;
    let doorSpeed = 80;

    const symbols: ISymbol[] = Array.from(
      { length: columns },
      (_, i) =>
        new Symbol(
          i * symbolSize,
          Math.random() * canvas.height,
          Math.random() * 5 + 5
        )
    );

    const handleCanvasClick = () => {
      setClickCount((prevCount) => {
        // handle the click based on the previous count
        if (prevCount === 1) {
          setShowPixelArt(true);
          setRepairmanVisible(true); // Hide repairman initially

          setRepairmanText("What are you doing?");
        } else if (prevCount === 2) {
          setRepairmanText("That's not yours to click.");
        } else if (prevCount === 3) {
          setRepairmanText("Don't click that again, please. I'm begging you.");
        } else if (prevCount === 4) {
          setShowPixelArt(false);
          setRepairmanVisible(false); // Hide repairman initially

          // Trigger the hiding of all elements
          setHideAll(true);

          // After 2 seconds, show only the repairman
          setTimeout(() => {
            // setHideAll(false); // This will cause a re-render
            setRepairmanVisible(true);
            setRepairmanText(
              "Great, you broke the website. Now we have to fix it."
            );
          }, 2000);
          setTimeout(() => {
            document.querySelectorAll(".matrix-box").forEach((el) => {
              el.classList.remove("hidden");
            });
            setRepairmanText(
              "Starting with the hole you made in the background."
            );
          }, 6000);
        }
        return prevCount + 1;
      });

      onClick();
    };

    canvas.addEventListener("click", handleCanvasClick);

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      symbols.forEach((symbol) => symbol.draw(ctx));

      ctx.fillStyle = "#FFFFFF";
      ctx.fillRect(0, 0, doorWidth, canvas.height);
      ctx.fillRect(canvas.width - doorWidth, 0, doorWidth, canvas.height);

      doorWidth -= doorSpeed;
      if (doorWidth < 0) doorWidth = 0;

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      canvas.removeEventListener("click", handleCanvasClick);
      // Add any additional cleanup if needed
    };
  }, [onClick, showPixelArt, clickCount]);

  useEffect(() => {
    if (hideAll) {
      // Apply the 'hidden' class to elements with 'landing-page-element' class
      document.querySelectorAll(".landing-page-element").forEach((el) => {
        el.classList.add("hidden");
      });
    } else {
      document.querySelectorAll(".landing-page-element").forEach((el) => {
        el.classList.remove("hidden");
      });
    }
  }, [hideAll]);

  return (
    <>
      <canvas
        className="landing-page-element matrix-box"
        ref={canvasRef}
        style={{
          backgroundColor: "black",
          position: "absolute",
          top: "40px",
          left: "500px",
          width: "60px",
          height: "60px",
        }}
      />
      {repairmanVisible && (
        <div id="repairman" style={pixelArtStyle}>
          <div className="repairman-speech-bubble">{repairmanText}</div>
        </div>
      )}
    </>
  );
};

export default MatrixAnimation;
