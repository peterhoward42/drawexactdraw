import firebase from "firebase/compat/app";
import SvelteApp from './SvelteApp.svelte';
import { firebaseConfig } from './firebase/config.js'
import { firebaseApp } from "./firebase/store.js"

console.log("XXXX main.js fired")

// We want a globally available single instance of the
// initialised Firebase App - because Firebase is used both for
// user identification/authentication, and for drawing storage and retreival.
firebaseApp.set(firebase.initializeApp(firebaseConfig));

const svelteApp = new SvelteApp({
	target: document.body,
	props: {
	}
});

export default (svelteApp);
