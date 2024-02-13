"use client";
import React from "react";
import styles from "../styles/Home.module.css";
import { placeholderProjects } from "@/helpers/placeholders";
import BrokenButton from "@/components/BrokenButton";
import ProjectDisplay from "@/components/ProjectDisplay";
import MatrixBackground from "@/components/MatrixBackground";
import BackgroundPieces from "@/components/BackgroundPieces";
import PhaserGameComponent from "@/phaser/PhaserGameComponent";

const HomePage = () => {
  return (
    <div className={styles.home}>
      <MatrixBackground />
      <BackgroundPieces />
      <ProjectDisplay projects={placeholderProjects} />
      <BrokenButton />
    </div>
  );
};

export default HomePage;
