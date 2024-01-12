"use client";
// Import necessary dependencies
import { useRouter, usePathname } from "next/navigation";
import { projectList } from "@/db/projectList";
import Image from "next/image";

import styles from "@/styles/ProjectPage.module.css";

const ProjectPage = () => {
  const router = useRouter();
  const pathname = usePathname();
  const pathSegments = pathname.split("/");

  const projectId: string = pathSegments[pathSegments.length - 1];

  const project = projectList.find((p) => `${p.id}` === projectId);

  if (!project) {
    return <p>Project not found!</p>;
  }

  // Use the project's image data or a placeholder image if not provided
  const projectImage = project.image ? (
    <Image
      src={project.image.src}
      alt={project.title}
      width={project.image.width}
      height={project.image.height}
      className={styles.heroImage}
    />
  ) : (
    <Image
      src="/path/to/placeholder/image.jpg" // Replace with your placeholder image path
      alt="Placeholder Image"
      width={400} // Adjust the width and height as needed
      height={200}
      className={styles.heroImage}
    />
  );

  return (
    <div className={styles.projectContainer}>
      <div className={styles.heroSection}>
        {projectImage}
        <div className={styles.projectTitle}>{project.title}</div>
      </div>
      <div className={styles.projectInfo}>
        {/* Render project information here */}
        <p>Status: {project.status}</p>
        <p>Introduction: {project.introduction}</p>
        <p>What I Learned: {project.whatILearned}</p>
        <p>
          Link:{" "}
          <a href={project.link} target="_blank" rel="noopener noreferrer">
            {project.link}
          </a>
        </p>

        <p>Introduction: {project.introduction}</p>
        <p>Background: {project.background}</p>
        <p>Technologies: {project.technologies}</p>
        <p>Features: {project.feautures}</p>
        <p>User Journey: {project.userJourney}</p>
        <p>Challenges and Solutions: {project.challengesAndSolutions}</p>
        <p>Results: {project.results}</p>
        <p>Development Process: {project.developmentProcess}</p>
        <p>Code Samples: {project.codeSamples}</p>
        <p>Live Demo: {project.liveDemo}</p>
        <p>Testimonials: {project.testimonials}</p>
      </div>
      <button className={styles.goBackButton} onClick={() => router.back()}>
        Go Back
      </button>
    </div>
  );
};

export default ProjectPage;
