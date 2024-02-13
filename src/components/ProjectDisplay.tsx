"use client";

import React, { useContext, useEffect, useState } from "react";
import Image from "next/image";
import styles from "../styles/ProjectDisplay.module.css";
import { projectList } from "@/db/projectList";
import { MyContext } from "@/context/context";

import { ProjectDisplayProps } from "../helpers/interfaces";
import Link from "next/link";

const ProjectDisplay: React.FC<ProjectDisplayProps> = () => {
  const { globalState, updateGlobalState } = useContext<any>(MyContext);
  const [visibility, setVisibility] = useState(true);

  useEffect(() => {
    if (globalState.brokenBackground) {
      setVisibility(false);
    }
    if (globalState.firstItemFall === true) {
      setTimeout(() => {
        updateGlobalState({ secondItemFall: true });
      }, 1000);
    }
  }, [globalState.firstItemFall === true]);

  return (
    <div
      className={`${styles.project__display} ${
        globalState.brokenBackground ? "project__display__visibility" : ""
      } ${globalState.isBroken ? "fallAndDisappear" : ""} `}
    >
      {projectList.map((project, index) => (
        <Link
          legacyBehavior
          key={project.id}
          href={`/projects/${project.id}`}
          passHref
        >
          <div
            key={project.id}
            className={`${styles.project__display__item} ${
              index === 0 && globalState.firstItemFall
                ? "animate__animated animate__rotateOutDownRight animate__faster"
                : ""
            } ${
              index === 1 && globalState.secondItemFall
                ? "animate__animated animate__rotateOutDownRight animate__faster"
                : ""
            }`}
          >
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
