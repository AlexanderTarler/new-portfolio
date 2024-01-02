"use client";
import React from "react";
import Link from "next/link";
import styles from "../styles/Header.module.css";
import Navbar from "@/components/Navbar";
import { randomCSS } from "@/helpers/randomCSS";
import "animate.css";

const Header = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.mainTitle}>
          <h1 className={`${styles.firstT} ${randomCSS()}`}>T</h1>
          <Link legacyBehavior href="/">
            <a className={styles.bigA}>A</a>
          </Link>
          <h1 className={`${styles.firstName} ${randomCSS()}`}>LEXANDER</h1>
          <h1 className={`${styles.lastName} ${randomCSS()}`}>RLER</h1>
          <h5 className={`${styles.tagline} ${randomCSS()}`}>
            a developer at home where functionality meets creativity
          </h5>
        </div>
        <Navbar />
      </header>
    </div>
  );
};

export default Header;
