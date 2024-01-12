export interface Project {
  id: number;
  title: string;
  status: string;
  image: {
    src: string;
    width: number;
    height: number;
  };
  introduction: string;
  background: string;
  technologies: string;
  feautures: string;
  userJourney: string;
  challengesAndSolutions: string;
  results: string;
  developmentProcess: string;
  codeSamples?: string;
  liveDemo?: string;
  testimonials?: string;
  whatILearned: string;
  link: string;
}

export interface ProjectDisplayProps {
  projects: Project[];
}
