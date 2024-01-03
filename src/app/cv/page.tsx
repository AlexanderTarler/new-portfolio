"use client";
import React, { useState } from "react";
import styles from "../../styles/Navbar.module.css";

const CV: React.FC = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const handleDownload = (language: string) => {
    const cvUrl =
      language === "svenska"
        ? "/cv/Alexander_Tarler.pdf"
        : "/cv/Alexander_Tarler_english.pdf";
    window.open(cvUrl, "_blank")!.focus();
  };

  return (
    <div className={styles.navbar__cv}>
      <button
        className={styles.navbar__cv_button}
        onClick={() => setShowDropdown(!showDropdown)}
      >
        CV
      </button>
      {showDropdown && (
        <div className={styles.navbar__cv_dropdown}>
          <button onClick={() => handleDownload("svenska")}>Svenska</button>
          <button onClick={() => handleDownload("english")}>English</button>
        </div>
      )}
    </div>
  );
};

export default CV;
