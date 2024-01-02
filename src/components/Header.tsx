"use client";
import React, { useState, useEffect } from "react";
import Head from "next/head";
import styles from "../styles/Header.module.css";
import Navbar from "@/components/Navbar";
import { randomCSS } from "@/helpers/randomCSS";
import "animate.css";

const Header = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.mainTitle}>
          <h1 className={[styles.firstT, randomCSS()].join(" ")}>T</h1>
          <h1 className={[styles.bigA].join(" ")}>A</h1>
          <h1 className={[styles.firstName, randomCSS()].join(" ")}>
            LEXANDER
          </h1>
          <h1 className={[styles.lastName, randomCSS()].join(" ")}>RLER</h1>
        </div>
        <Navbar />
      </header>
    </div>
  );
};

export default Header;
