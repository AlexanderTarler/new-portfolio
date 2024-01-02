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
          <Link href="/projects">
            <div className={styles.navbaritemLink}>Projects</div>
          </Link>
        </li>
        <li className={[styles.navbaritem, randomCSS()].join(" ")}>
          <Link href="/cv">
            <div className={styles.navbaritemLink}>CV</div>
          </Link>
        </li>
        <li className={[styles.navbaritem, randomCSS()].join(" ")}>
          <Link href="/about">
            <div className={styles.navbaritemLink}>About</div>
          </Link>
        </li>
        <li className={[styles.navbaritem, randomCSS()].join(" ")}>
          <Link href="/blog">
            <div className={styles.navbaritemLink}>Blog</div>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
