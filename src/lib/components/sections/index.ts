import Me from './Me.svelte';
import Motion from './Motion.svelte';
import Artist from './Artist.svelte';
import Developer from './Developer.svelte';
import Contact from './Contact.svelte';

export type Section = {
	component: any;
	title: string;
	prefix?: string;
};

const sections: Section[] = [
	{ component: Me, title: 'About' },
	{ component: Developer, prefix: 'a', title: 'Experience' },
	{ component: Motion, prefix: 'a', title: 'Motion' },
	{ component: Artist, prefix: 'an', title: 'Art' },
	{ component: Contact, title: 'Contact' }
];

export default sections;
