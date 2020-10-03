<script>
  import PageSection from "components/PageSection.svelte";
  import Pill from "components/Pill.svelte";

  const languages = [
    "Javascript",
    "Typescript",
    "Python",
    "PHP",
    "Java",
    "C/C++",
    "SQL",
    "NoSQL",
    "Back",
  ];
  const libs = [
    ["React", "https://reactjs.org/"],
    ["Next.js", "https://nextjs.org/"],
    ["Node.js", "https://nodejs.org/en/"],
    ["Svelte", "https://svelte.dev/"],
    ["Sapper", "https://sapper.svelte.dev/"],
    ["Angular", "https://angular.io/"],
    ["Jest", "https://jestjs.io/en/"],
    ["Selenium", "https://www.selenium.dev/"],
    ["SASS", "https://sass-lang.com/"],
    ["And many more..."],
  ];
  const tools = [
    ["Git", "https://git-scm.com/"],
    ["NPM", "https://www.npmjs.com/"],
    ["Yarn", "https://classic.yarnpkg.com/en/"],
    ["Docker", "https://www.docker.com/"],
    ["Figma", "https://www.figma.com/"],
    ["Illustrator", "https://www.adobe.com/products/illustrator.html"],
    ["After Effects", "https://www.adobe.com/products/aftereffects.html"],
    ["Blender", "https://www.blender.org/"],
    ["MacOs"],
    ["Windows"],
    ["Linux"],
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
</svelte:head>

<h1>Experience</h1>

<PageSection
  heading="Vimeo"
  subHeading="Senior Frontend Platform Engineer"
  detail="Mar 2019 — Current">
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eu eleifend
    elit, ut porttitor diam. Nullam porta velit neque, sit amet feugiat arcu
    blandit sit amet. Nulla enim turpis, ornare at pulvinar sed, tempor eu enim.
  </p>
</PageSection>
<PageSection
  heading="Fidelity"
  subHeading="Software Engineer"
  detail="Sep 2017 — Mar 2019">
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eu eleifend
    elit, ut porttitor diam. Nullam porta velit neque, sit amet feugiat arcu
    blandit sit amet. Nulla enim turpis, ornare at pulvinar sed, tempor eu enim.
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
    <Pill text={l[0]} href={l.length > 1 && l[1]} />
  {/each}
</PageSection>
<PageSection heading="Tool/Applications">
  {#each tools as t}
    <Pill text={t[0]} href={t.length > 1 && t[1]} />
  {/each}
</PageSection>

<hr />

<h1>Education</h1>

<PageSection
  heading="The University of North Carolina at Chapel Hill"
  subHeading="Bachelor of Arts in Computer Science"
  detail="May 2017" />
<PageSection
  heading="Rowan Cabarrus Community College"
  subHeading="Associates in Science"
  detail="May 2015" />
