"use client";
import { useRouter, usePathname } from "next/navigation";
import { projectList } from "@/db/projectList";
import Image from "next/image";

import styles from "@/styles/ProjectPage.module.css"; // You will create this CSS module

const ProjectPage = () => {
  const router = useRouter();
  const pathname = usePathname();
  const pathSegments = pathname.split("/");

  const projectId: string = pathSegments[pathSegments.length - 1];

  const project = projectList.find((p) => `${p.id}` === projectId);

  if (!project) {
    return <p>Project not found!</p>;
  }

  // Placeholder for project image, replace with actual image path
  const projectImage = project.image || "/path/to/default/project/image.jpg";

  return (
    <div className={styles.projectContainer}>
      {/* Hero Section */}
      <div className={styles.heroSection}>
        <Image
          src={projectImage}
          alt={project.title}
          className={styles.heroImage}
        />
        <h1 className={styles.projectTitle}>{project.title}</h1>
      </div>

      {/* Project Information */}
      <div className={styles.projectInfo}>
        <h2>Description</h2>
        <p>{project.description}</p>
        <h2>What I Learned</h2>
        <p>{project.whatILearned}</p>
        {/* Add more sections as needed */}
      </div>

      {/* Navigation */}
      <button onClick={() => router.back()} className={styles.goBackButton}>
        Back to Projects
      </button>
    </div>
  );
};

export default ProjectPage;
