import React from "react";
import Link from "next/link";
import styles from "../styles/Navbar.module.css";
import "../styles/Navbar.module.css";
import { randomCSS } from "@/helpers/randomCSS";
import "animate.css";

const Navbar: React.FC = () => {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navbarlist}>
        <li className={[styles.navbaritem, randomCSS()].join(" ")}>
          <Link legacyBehavior href="/projects">
            <a className={styles.navbaritemLink}>Projects</a>
          </Link>
        </li>
        <li className={[styles.navbaritem, randomCSS()].join(" ")}>
          <Link legacyBehavior href="/cv">
            <a className={styles.navbaritemLink}>CV</a>
          </Link>
        </li>
        <li className={[styles.navbaritem, randomCSS()].join(" ")}>
          <Link legacyBehavior href="/about">
            <a className={styles.navbaritemLink}>About</a>
          </Link>
        </li>
        <li className={[styles.navbaritem, randomCSS()].join(" ")}>
          <Link legacyBehavior href="/blog">
            <a className={styles.navbaritemLink}>Blog</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
