export interface Project {
  id: number;
  title: string;
  status: string;
  image: {
    src: string;
    width: number;
    height: number;
  };
  description: string;
  whatILearned: string;
  link: string;
}

export interface ProjectDisplayProps {
  projects: Project[];
}
