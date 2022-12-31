<script>
	import PageSection from '$lib/components/PageSection.svelte';
	import Pill from '$lib/components/Pill.svelte';

	const languages = [
		'Javascript',
		'Typescript',
		'Python',
		'PHP',
		'Java',
		'C/C++',
		'SQL',
		'NoSQL',
		'Bash'
	];
	const libs = [
		['React', 'https://reactjs.org/'],
		['Next.js', 'https://nextjs.org/'],
		['Node.js', 'https://nodejs.org/en/'],
		['Svelte', 'https://svelte.dev/'],
		['Sapper', 'https://sapper.svelte.dev/'],
		['Angular', 'https://angular.io/'],
		['Redux', 'https://redux.js.org/'],
		['Jest', 'https://jestjs.io/en/'],
		['Selenium', 'https://www.selenium.dev/'],
		['SASS', 'https://sass-lang.com/'],
		['And so many more...', undefined]
	];
	const tools = [
		['Git', 'https://git-scm.com/'],
		['NPM', 'https://www.npmjs.com/'],
		['Yarn', 'https://classic.yarnpkg.com/en/'],
		['Figma', 'https://www.figma.com/'],
		['Vercel', 'https://vercel.com/'],
		['Jira', 'https://www.atlassian.com/software/jira'],
		['Illustrator', 'https://www.adobe.com/products/illustrator.html'],
		['After Effects', 'https://www.adobe.com/products/aftereffects.html'],
		['Blender', 'https://www.blender.org/'],
		['MacOs', undefined],
		['Windows', undefined],
		['Linux', undefined]
	];
</script>

<style>
	h1 {
		font-size: 3rem;
		font-weight: 500;
	}

	p {
		font-weight: 300;
		font-size: 1rem;
	}

	hr {
		border-top: none;
		border-color: #aaa;
		max-width: 30rem;
		text-align: left;
		margin-left: 0;
		margin-bottom: 2rem;
	}
</style>

<svelte:head>
	<title>Experience</title>
	<meta name="description" content="Paul Mendoza's developer experience / resume" />
</svelte:head>

<h1>Experience</h1>

<PageSection
	heading="Vimeo"
	subHeading="Senior Frontend Platform Engineer"
	detail="Mar 2019 — Current"
>
	<p>
		As a platform engineer my main responsibilities consist of building out tools and architecture
		to optimize and support the workflow of teams across our core SAAS applications.
	</p>
	<p>
		Because of the nature of touching so many parts of our stack I also spend much of my time
		interfacing with teams throughout the company to collaborate and problem solve engineering and
		design issues that may arise on a day to day basis.
	</p>
	<p>Technologies: Javascript, Typescript, React, PHP, Next.js</p>
</PageSection>
<PageSection
	heading="Fidelity Investments"
	subHeading="Software Engineer"
	detail="Sep 2017 — Mar 2019"
>
	<p>
		Full stack developer on several large scale customer facing applications with a focus on
		creating easy to use and intuitive experiences to reduce user frustration and call volume.
	</p>
	<p>
		My work involved multiple different technologies including: javascript, node, angular, ember,
		sass, handlebars, and a plethora of internal toolling.
	</p>
</PageSection>

<hr />

<h1>Skills</h1>
<PageSection heading="Languages">
	{#each languages as text}
		<Pill {text} />
	{/each}
</PageSection>
<PageSection heading="Frameworks/Libraries">
	{#each libs as l}
		<Pill text={l[0]} href={l[1]} />
	{/each}
</PageSection>
<PageSection heading="Tool/Applications">
	{#each tools as t}
		<Pill text={t[0]} href={t[1]} />
	{/each}
</PageSection>

<hr />

<h1>Education</h1>

<PageSection
	heading="The University of North Carolina at Chapel Hill"
	subHeading="Bachelor of Arts in Computer Science"
	detail="May 2017"
/>
<PageSection
	heading="Rowan Cabarrus Community College"
	subHeading="Associates in Science"
	detail="May 2015"
/>
