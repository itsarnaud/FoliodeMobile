export interface PortfolioData {
  id: string;
  title: string;
  template: string;
  url?: string;
  projects: {
    id: string;
    title: string;
    description?: string;
    projectsImages?: { img_src: string }[];
    links?: { name: string; url: string }[];
  }[];
}