export type Project = {
  title: string;
  description: string;
  link: string;
  key: string;
  github: string;
  tools: [string, string | undefined][];
};

export const projects: Project[] = [
  {
    title: "Snake Cubed",
    key: "snakecubed",
    link: "https://snake-cubed.tk",
    github: "https://github.com/qdozaq/snake-cubed",
    description: "",
    tools: [],
  },
  {
    title: "Burgtown",
    key: "burgtown",
    link: "https://burgtown.tk",
    github: "https://github.com/qdozaq/BurgTown",
    description: "",
    tools: [],
  },
  {
    title: "This Site!",
    key: "portfolio",
    link: "https://doza.design",
    github: "https://github.com/qdozaq/portfolio-site",
    description: "",
    tools: [],
  },
];

// map each project key to it's index
export const projectMap: Record<string, number> = projects.reduce(
  (map, project, i) => ({ ...map, [project.key]: i }),
  {}
);
