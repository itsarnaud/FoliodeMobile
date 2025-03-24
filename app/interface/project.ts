export interface Project {
  id: string;
  title: string;
  description: string;
  links?: { name: string; url: string }[];
  image: string | null;
}