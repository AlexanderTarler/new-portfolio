"use client";
import React, { useState, useEffect } from "react";
import styles from "../styles/Home.module.css";
import BrokenButton from "@/components/BrokenButton";

import "animate.css";

const HomePage = () => {
  return (
    <div className={styles.container}>
      <BrokenButton />
    </div>
  );
};

export default HomePage;
