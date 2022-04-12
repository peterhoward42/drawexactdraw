import SvelteApp from './SvelteApp.svelte';

// This import creates (as a side effect) a single, module-scoped bundle of integrated
// firebase services including: the FirebaseApp, Storage, and Authorization.
// And exposes some API functions to use them.
import './firebase/initialize.js'

console.log("XXXX main.js fired")

const svelteApp = new SvelteApp({
	target: document.body,
	props: {
	}
});

export default (svelteApp);
