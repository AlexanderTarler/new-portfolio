"use client";
import React from "react";
import Link from "next/link";
import { projectList } from "@/db/projectList";
import styles from "@/styles/Projects.module.css";
import Image from "next/image";

const Projects: React.FC = () => {
  return (
    <div className={styles.project__page}>
      <h1 className={styles.project__title}>My Projects</h1>
      <div className={styles.project__list}>
        {projectList.map((project) => (
          <Link
            legacyBehavior
            key={project.id}
            href={`/projects/${project.id}`}
            passHref
          >
            <a
              className={`${styles.project__list__item} ${styles.noUnderline}`}
            >
              <Image
                src={project.image.src}
                alt={project.title}
                layout="responsive"
                width={project.image.width}
                height={project.image.height}
                objectFit="cover"
              />
              <div className={styles.project__text}>
                <h2>{project.title}</h2>
                <p>{project.status}</p>
                <p>{project.introduction}</p>
                <p>{project.whatILearned}</p>
              </div>
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Projects;
