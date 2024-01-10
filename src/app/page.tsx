"use client";
import React, { useState, useEffect } from "react";
import styles from "../styles/Home.module.css";
import BrokenButton from "@/components/BrokenButton";
import ProjectDisplay from "@/components/ProjectDisplay";
import { placeholderProjects } from "@/helpers/placeholders";
import "animate.css";

const HomePage = () => {
  return (
    <div className={styles.home}>
      <ProjectDisplay projects={placeholderProjects} />
      <BrokenButton />
    </div>
  );
};

export default HomePage;
