export type Video = {
	title: string;
	description: string;
	videoId: number;
	key: string;
};

export const videos: Video[] = [
	{
		title: 'Reel 2019',
		key: 'reel',
		videoId: 308906486,
		description: `
      A collection of my work through the years.
      <br>
      <br>
      All the featured content has been animated by me with designs and graphics
      varying from myself to other teams and designers.
      <br>
      <br>
      Music: <a href="https://freemusicarchive.org/music/Billy_Early/FrostWire_Creative_Commons_Mixtape_Vol_6/03_Billy_Early_The_Early_EP_Cool_Kids_FROSTCLICK_FROSTWIRE_CREATIVE_COMMONS">
      Cool Kids</a> by
      <a href="https://www.instagram.com/billyearlyraps/?hl=en">Billy Early</a>
    `
	},
	{
		title: 'Animate NYC Vol. 1',
		key: 'animatenyc',
		videoId: 446258250,
		description: `
      A year long personal project following my move to NYC.
      <br>
      Inspired by the amount of street art around me I set out to bring these pieces to life.
      My goal was to keep intact as much of the art's original intent while adding my own flare and character.
      <br>
      Many of these pieces proved to be great challenges but overall has probably been some of my most fulfilling work.
      <br>
      <br>
      <em>Disclaimer</em>: This was not a direct collaboration with any of the artists featured.
      <br>
      <br>
      Featured Artists: 
      <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/thebob.book">@thebob.book</a>
      <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/hissxx">@hissxx</a>
      <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/goofy_froot">@goofy_froot</a>
      <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/doitourselvespresents">@doitourselvespresents</a>
      <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/leonkarssen">@leonkarssen</a>
      <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/bortart">@bortart</a>
      <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/antennae">@antennae</a>
      <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/hugogyrl">@hugogyrl</a>
      <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/phoebenewyork">@phoebenewyork</a>
      <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/itskaynor">@itskaynor</a>
      <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/sokaruno">@sokaruno</a>
      <br>
      <br>
      Music: <a href="https://freemusicarchive.org/music/MC_Cullah_1450/E-MC_Cullah/A_Mess_These_Days_1821">
      A Mess These Days
      </a> by
      <a href="https://www.instagram.com/cullahmusic/?hl=en">Cullah</a>
    `
	},
	{
		title: 'CORNDOG',
		key: 'corndog',
		videoId: 455248597,
		description: `
      The first of potentially several videos digging through the depths of 
      <a target="_blank" rel="noopener noreferrer" href="https://archive.org/">archive.org</a>
      trying to find strange videos from the past and making them even stranger!
      <br>
      <br>
      Animation and music created by me.
    `
	}
];

// map each project key to it's index
export const videoMap: Record<string, number> = videos.reduce(
	(map, project, i) => ({ ...map, [project.key]: i }),
	{}
);
