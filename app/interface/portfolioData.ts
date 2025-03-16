export interface PortfolioData {
  title: string;
  url: string;
  subtitle: string;
  bio: string;
  config: {
    colors: {
      primary: string;
      secondary: string;
      warning: string;
      success: string;
      info: string;
      light: string;
    };
    font: string;
  };
  template: string;
  users: {
    lastname: string;
    firstname: string;
    email: string;
    avatar_url: string | null;
    promotion: string | null;
  };
  projects: Array<{
    id: string;
    title: string;
    description: string;
    start_date: string | null;
    end_date: string | null;
    projectsImages: Array<{
      id: string;
      img_src: string;
      img_alt: string;
    }>;
    projectsLinks: Array<{
      id: string;
      name: string;
      url: string;
    }>;
    tools: Array<any>;
  }>;
  tools: Array<{
    id: string;
    name: string;
    picto: string;
  }>;
}