import SvelteApp from './SvelteApp.svelte';

console.log("XXXX main.js fired")

const svelteApp = new SvelteApp({
	target: document.body,
	props: {
	}
});

export default (svelteApp);
