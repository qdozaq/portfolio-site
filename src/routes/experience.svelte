<script>
  import NavigationButton from "components/NavigationButton.svelte";
  import PageSection from "components/PageSection.svelte";
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
<PageSection heading="Languages" />
<PageSection heading="Frameworks/Livraries" />
<PageSection heading="Tool/Applications" />

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
