"use client";
import React, { useEffect, useRef } from "react";
import styles from "../styles/MatrixBackground.module.css";

interface Point {
  x: number;
  y: number;
  value?: string;
  speed?: number;
  draw: (ctx: CanvasRenderingContext2D) => void;
}

const MatrixBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;
    class PointImpl implements Point {
      x: number;
      y: number;
      value?: string;
      speed?: number;

      constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
      }

      draw(ctx: CanvasRenderingContext2D) {
        this.value =
          charArr[Math.floor(Math.random() * charArr.length)].toUpperCase();
        this.speed = Math.random() * fontSize * 0.5 + fontSize * 0.5;

        ctx.fillStyle = "#0F0";
        ctx.font = `${fontSize}px san-serif`;
        ctx.fillText(this.value!, this.x, this.y);

        this.y += this.speed!;
        if (this.y > canvas.height) {
          this.y = 0;
          this.x =
            Math.floor((Math.random() * canvas.width) / fontSize) * fontSize;
        }
      }
    }
    const charArr = [
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
      "g",
      "h",
      "i",
      "j",
      "k",
      "l",
      "m",
      "n",
      "o",
      "p",
      "q",
      "r",
      "s",
      "t",
      "u",
      "v",
      "w",
      "x",
      "y",
      "z",
      "0",
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
    ];
    const fontSize = 10;
    let fallingCharArr: Point[] = [];
    let cancelAnimationFrameId: number;

    // full screen dimensions
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      fallingCharArr = [];
      for (let i = 0; i < canvas.width / fontSize; i++) {
        fallingCharArr.push(
          new PointImpl(i * fontSize, Math.random() * canvas.height)
        );
      }
    };

    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();

    const update = () => {
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < fallingCharArr.length; i++) {
        fallingCharArr[i].draw(ctx);
      }
      cancelAnimationFrameId = requestAnimationFrame(update);
    };

    update();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(cancelAnimationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className={styles.matrixBackground} />;
};

export default MatrixBackground;
