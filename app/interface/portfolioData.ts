export interface PortfolioData {
  id: string;
  title: string;
  template: string;
  url?: string;
  config?: {
    colors?: {
      primary: string;
      secondary: string;
      warning?: string;
      success?: string;
      info?: string;
      light?: string;
    };
    font?: string;
  };
  projects: {
    id: string;
    title: string;
    description?: string;
    projectsImages?: { img_src: string }[];
    links?: { name: string; url: string }[];
  }[];
  tools?: {
    id: string;
    name: string;
    image?: string | null;
  }[];
}