"use client";
// Import necessary dependencies
import React, { useContext } from "react";
import Image from "next/image";
import styles from "../styles/ProjectDisplay.module.css";
import { projectList } from "@/db/projectList";
import { MyContext } from "@/context/context";

import { ProjectDisplayProps } from "../helpers/interfaces";
import Link from "next/link";

const ProjectDisplay: React.FC<ProjectDisplayProps> = () => {
  const { globalState } = useContext<any>(MyContext);

  return (
    <div
      className={`${styles.project__display} ${
        globalState.isBroken ? "fallAndDisappear" : ""
      }`}
    >
      {projectList.map((project) => (
        <Link
          legacyBehavior
          key={project.id}
          href={`/projects/${project.id}`}
          passHref
        >
          <div key={project.id} className={styles.project__display__item}>
            <Image
              src={project.image.src}
              width={project.image.width}
              height={project.image.height}
              alt={project.introduction}
            />
            <h2>{project.title}</h2>
            <p>Status: {project.status}</p>
            <p>Summary: {project.introduction}</p>
            <a href={project.link}>Read More</a>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ProjectDisplay;
