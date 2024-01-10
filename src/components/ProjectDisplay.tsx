"use client";
import React from "react";
import Image from "next/image";
import styles from "../styles/ProjectDisplay.module.css";
import { projectList } from "@/db/projectList";

import { ProjectDisplayProps } from "../helpers/interfaces";

const ProjectDisplay: React.FC<ProjectDisplayProps> = () => {
  return (
    <div className={styles.project__display}>
      {projectList.map((project) => (
        <div key={project.id} className={styles.project__display__item}>
          <Image
            src={project.image.src}
            width={project.image.width}
            height={project.image.height}
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
