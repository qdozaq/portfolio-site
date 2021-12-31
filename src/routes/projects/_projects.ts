export type Project = {
	title: string;
	description: string;
	link: string;
	key: string;
	github?: string;
	tools: [string, string | undefined][];
	novideo?: boolean;
};

export const projects: Project[] = [
	{
		title: 'KilledByLease',
		key: 'killedbylease',
		link: 'https://killedbylease.com/',
		description: `
    Eccommerce site for the clothing brand <em><b>KilledByLease</b></em>.
    <br/>
    <br/>
    One of my larger freelance solo projects, which also marks my first foray into integrating with a headless ecommerce solution.
    <br/>
    Worked closely with the brand over the course of several weeks to design and develop a site that fit their core message and values.
    `,
		tools: [
			['Typescript', 'https://www.typescriptlang.org/'],
			['React', 'https://reactjs.org/'],
			['Next.js', 'https://nextjs.org/'],
			['WebGL', 'https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API'],
			['Tailwindcss', 'https://tailwindcss.com/'],
			['Emotion', 'https://emotion.sh/docs/introduction'],
			['BigCommerce', 'https://www.bigcommerce.com/'],
			['Vercel', 'https://vercel.com']
		]
	},
	{
		title: 'Snake Cubed',
		key: 'snakecubed',
		link: 'https://snake-cubed.tk',
		github: 'https://github.com/qdozaq/snake-cubed',
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
			['Typescript', 'https://www.typescriptlang.org/'],
			['React', 'https://reactjs.org/'],
			['react-three-fiber', 'https://github.com/pmndrs/react-three-fiber'],
			['styled-components', 'https://styled-components.com/'],
			['react-spring', 'https://www.react-spring.io/'],
			['react-use-gesture', 'https://github.com/pmndrs/react-use-gesture'],
			['Vercel', 'https://vercel.com']
		]
	},
	{
		title: 'Burgtown',
		key: 'burgtown',
		link: 'https://burgtown.vercel.app/',
		github: 'https://github.com/qdozaq/BurgTown',
		description: `
      Burgtown is a little web game I created back in 2017 after graduating
      college and wanting to do something that wasn't so <em>academic</em>.
      <br/>
      This project has gone through a few iterations over the years starting as
      a simple p5.js site to integrating a server and database for scores and then moving
      to a more modern serverless approach with Vercel and cloud functions.
    `,
		tools: [
			['Javascript', undefined],
			['p5.js', 'https://p5js.org/'],
			['MongoDB', 'https://www.mongodb.com/'],
			['node.js', 'https://nodejs.org/en/'],
			['Vercel', 'https://vercel.com']
		]
	},
	{
		title: 'This Site!',
		key: 'portfolio',
		link: 'https://doza.design',
		github: 'https://github.com/qdozaq/portfolio-site',
		description: `
      Hey look its this site!
      <br>
      <br>
      Besides creating a centralized hub for everything me I really wanted to
      push myself to create a site that utilizes all my skills both as a developer and motion designer.
      This site focuses on strong typography, seemless motion, and performance with near perfect lighthouse scores.
    `,
		tools: [
			['Typescript', 'https://www.typescriptlang.org/'],
			['Svelte', 'https://svelte.dev/'],
			['Svelte Kit', 'https://kit.svelte.dev/'],
			['Vercel', 'https://vercel.com']
		]
	},
	{
		title: 'MutualAid.World',
		key: 'mutualaid',
		link: 'https://mutualaid.world/',
		novideo: true,
		github: 'https://github.com/factn/resilience-app',
		description: `
      This is an open source project that came about during the first few months of the COVID-19 quarantine
      focusing on helping local mutualaid groups connect volunteers with people who are in need of assistance.
      <br>
      <br>

      During the roughly 2-3 month period I was on the project I was an active contributor and tech lead.
      My role involved helping the team setup and architect the app as well as organizing / overseeing
      work across the many developers of varying skill levels coming in and out of the project.
    `,
		tools: [
			['Firebase', 'https://firebase.google.com/'],
			['React', 'https://reactjs.org/'],
			['Typescript', 'https://www.typescriptlang.org/'],
			['Material UI', 'https://material-ui.com/']
		]
	}
];

// map each project key to it's index
export const projectMap: Record<string, number> = projects.reduce(
	(map, project, i) => ({ ...map, [project.key]: i }),
	{}
);
