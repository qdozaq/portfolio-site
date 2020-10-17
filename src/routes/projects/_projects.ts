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
    description: `
      A new spin on the classic game of Snake.
      <br/>
      <br/>
      Really wanted to do a project using <em>react-three-fiber</em> and the pandemic
      gave me a good opportunity to finally play with it.
      <br/>
      <br/>
      Original idea was simple, what if the game <em>Snake</em> was on a 3D cube? This project was filled
      with challenges and interesting problems across design, programming and user experience
      and was a great intro to learning a really cool library.
      <br/>
      <br/>
      This project was also nominated for the 2020 React OSAwards <em>"Fun Side Project of the Year"</em>.
    `,
    tools: [
      ["Typescript", "https://www.typescriptlang.org/"],
      ["React", "https://reactjs.org/"],
      ["react-three-fiber", "https://github.com/pmndrs/react-three-fiber"],
      ["styled-components", "https://styled-components.com/"],
      ["react-spring", "https://www.react-spring.io/"],
      ["react-use-gesture", "https://github.com/pmndrs/react-use-gesture"],
      ["Vercel", "https://vercel.com"],
    ],
  },
  {
    title: "Burgtown",
    key: "burgtown",
    link: "https://burgtown.tk",
    github: "https://github.com/qdozaq/BurgTown",
    description: `
      Burgtown is a little web game I created back in 2017 after graduating
      college and wanting to do something that wasn't so <em>academic</em>.
      <br/>
      This project has gone through a few iterations over the years starting as
      a simple p5.js site to integrating a server and database for scores and then moving
      to a more modern serverless approach with Vercel and cloud functions.
    `,
    tools: [
      ["Javascript", undefined],
      ["p5.js", "https://p5js.org/"],
      ["MongoDB", "https://www.mongodb.com/"],
      ["node.js", "https://nodejs.org/en/"],
      ["Vercel", "https://vercel.com"],
    ],
  },
  {
    title: "This Site!",
    key: "portfolio",
    link: "https://doza.design",
    github: "https://github.com/qdozaq/portfolio-site",
    description: `
      Hey look its this site!
      <br>
      <br>
      Besides creating a centralized hub for everything me I really wanted to
      push myself to create a site that utilizes all my skills both as a developer and motion designer.
      I also wanted there to be no performance drawback to my design choices with my goal being to score
      as high as possible on lighthouse and pagespeed insights tests.
    `,
    tools: [
      ["Typescript", "https://www.typescriptlang.org/"],
      ["Svelte", "https://svelte.dev/"],
      ["Sapper", "https://sapper.svelte.dev/"],
    ],
  },
];

// map each project key to it's index
export const projectMap: Record<string, number> = projects.reduce(
  (map, project, i) => ({ ...map, [project.key]: i }),
  {}
);
