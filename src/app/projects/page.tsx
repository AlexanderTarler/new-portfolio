"use client";
import React from "react";
import { projectList } from "@/db/projectList";
import styles from "@/styles/Projects.module.css";
import Image from "next/image";

const Projects: React.FC = () => {
  return (
    <div className={styles.project__page}>
      <h1 className={styles.project__title}>My Projects</h1>
      <div className={styles.project__list}>
        {projectList.map((project, index) => (
          <div key={index} className={styles.project__list__item}>
            <h2>{project.title}</h2>
            <p>{project.status}</p>
            <p>{project.description}</p>
            <p>{project.whatILearned}</p>
            <a href={project.link}>View Project</a>
            <Image
              src={project.image.src}
              alt={project.title}
              width={project.image.width}
              height={project.image.height}
            />{" "}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
