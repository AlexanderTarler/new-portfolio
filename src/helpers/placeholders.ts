import { Project } from "./interfaces";

export const placeholderProjects: Project[] = [
  {
    id: 1,
    title: "Project 1",
    status: "In Progress", // Add the 'status' property
    image: {
      src: "https://picsum.photos/seed/picsumsadasd/200/300",
      width: 300,
      height: 150,
    },
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, consequat nibh.",
    whatILearned: "Here's what I learned from Project 1.",

    link: "https://www.google.com",
  },
  {
    id: 2,
    title: "Project 2",
    status: "Completed", // Add the 'status' property
    image: {
      src: "https://picsum.photos/seed/picsumsadasd/200/300",
      width: 300,
      height: 150,
    },
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, consequat nibh.",
    whatILearned: "Here's what I learned from Project 2.",

    link: "https://www.google.com",
  },
  {
    id: 3,
    title: "Project 3",
    status: "In Progress", // Add the 'status' property
    image: {
      src: "https://picsum.photos/seed/picsumsadasd/200/300",
      width: 300,
      height: 150,
    },
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, consequat nibh.",
    whatILearned: "Here's what I learned from Project 3.",

    link: "https://www.google.com",
  },
];
