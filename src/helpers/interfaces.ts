export interface Project {
  id: number;
  title: string;
  image: string;
  width: number;
  height: number;
  description: string;
  link: string;
}

export interface ProjectDisplayProps {
  projects: Project[];
}
