"use client";
import React from "react";
import Image from "next/image";
import styles from "../styles/ProjectDisplay.module.css";

import { Project, ProjectDisplayProps } from "../helpers/interfaces";

const ProjectDisplay: React.FC<ProjectDisplayProps> = ({ projects }) => {
  return (
    <div className={styles.project__display}>
      {projects.map((project) => (
        <div key={project.id} className={styles.project__display__item}>
          <Image
            src={project.image}
            width={project.width}
            height={project.height}
            alt={project.description}
          />
          <p>{project.description}</p>
          <a href={project.link}>Read More</a>
        </div>
      ))}
    </div>
  );
};

export default ProjectDisplay;
