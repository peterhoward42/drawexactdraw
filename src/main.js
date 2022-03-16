import SvelteApp from './SvelteApp.svelte';

import { getAnalytics } from "firebase/analytics";
import firebase from 'firebase/compat/app';
import * as firebaseui from 'firebaseui';
import 'firebaseui/dist/firebaseui.css';

const firebaseConfig = {
	apiKey: "AIzaSyBp4hWn1_e1ADqulCO1N5iWz5z54kTx1eo",
	authDomain: "drawexact.firebaseapp.com"	,
	projectId: "drawexact",
	storageBucket: "drawexact.appspot.com",
	messagingSenderId: "193591754753",
	appId: "1:193591754753:web:8b8cb9902bf392e6e14000",
	measurementId: "G-F3414F7H16"
};

const firebase_app = firebase.initializeApp(firebaseConfig);
const analytics = getAnalytics(firebase_app);
var firebaseUi = new firebaseui.auth.AuthUI(firebase.auth());

var uiConfig = {
	signInSuccessUrl: '<url-to-redirect-to-on-success>',
	signInOptions: [
		firebase.auth.GoogleAuthProvider.PROVIDER_ID,
	],
	// tosUrl and privacyPolicyUrl accept either url string or a callback
	// function.
	tosUrl: '<your-tos-url>',
	privacyPolicyUrl: function () {
		window.location.assign('<your-privacy-policy-url>');
	}
};

// The start method will wait until the DOM is loaded.
firebaseUi.start('#firebaseui-auth-container', uiConfig);

// Temporarily we will prevent the SvelteApp from loading so we can
// get a clearer view of what the FireBase UI is doing.
// TODO

// const svelteApp = new SvelteApp({
// 	target: document.body,
// 	props: {
// 	}
// });

// export default (svelteApp);
