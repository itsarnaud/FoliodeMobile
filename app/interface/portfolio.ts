export interface Portfolio {
  title: string;
  subtitle: string;
  bio: string;
  url: string;
  config: {
    colors: {
      primary: string;
      secondary: string;
      background?: string;
    };
    font: string;
  };
  template: string;
}