import { Project } from "../helpers/interfaces";

export const projectList: Project[] = [
  {
    id: 1,
    title: "Accounting App",
    status: "In Progress",
    image: {
      src: "https://picsum.photos/seed/picsumsadasd/300/200",

      width: 200,
      height: 100,
    },
    description: "This is the description of Project 1.",
    whatILearned: "Here's what I learned from Project 1.",
    link: "https://project1.com",
  },
  {
    id: 2,
    title: "Project 2",
    status: "In Progress",

    image: {
      src: "https://picsum.photos/seed/picsumsadasd/300/200",

      width: 200,
      height: 100,
    },
    description: "This is the description of Project 2.",
    whatILearned: "Here's what I learned from Project 2.",
    link: "https://project2.com",
  },
];
