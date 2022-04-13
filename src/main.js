import SvelteApp from './SvelteApp.svelte';
import { composeAndExposeFirebaseComponents } from './firebase/store.js'

composeAndExposeFirebaseComponents()

console.log("XXXX main.js fired")

const svelteApp = new SvelteApp({
	target: document.body,
	props: {
	}
});

export default (svelteApp);
