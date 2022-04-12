import { writable } from 'svelte/store';

import firebase from "firebase/compat/app";
import { browserLocalPersistence, initializeAuth } from "firebase/auth";
import * as firebaseui from "firebaseui";
import { getStorage } from "firebase/storage";

import { firebaseConfig } from './config.js'
import { handleSignInSuccess } from "../services/handlelifecycle.js";

export const firebaseApp = writable(null);
export const firebaseAuth = writable(null);
export const firebaseStorage = writable(null);
export const firebaseAuthUi = writable(null);
export const firebaseAuthConfig = writable(null);

// This function composes and configures a set of integrated Firebase components,
// and makes them available to clients via the exported Svelte store fields above.
export function composeAndExposeFirebaseComponents() {
    const app = firebase.initializeApp(firebaseConfig);
    // "local persistence" means e want to keep the user logged in on this device,
    // forever - across browser restarts - until, or if, they explicitly choose to log out.
    const persistenceModel = { persistence: browserLocalPersistence };
    const auth = initializeAuth(app, persistenceModel);
    const storage = getStorage(app);

    // We need an authUI object prepared, and a uiConfig, so that later they are
    // available when the SignIn Svelte component wants to "start" it.
    const authUi = new firebaseui.auth.AuthUI(auth);
    const uiConfig = {
        signInSuccessUrl: "unused",
        signInFlow: "popup",
        callbacks: {
            signInSuccessWithAuthResult: handleSignInSuccess,
            uiShown: function () {
                console.log("XXXX auth ui shown callback fired");
            },
        },
        // todo - put in facebook etc too
        signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID],
        // todo - put in proper privacy policy and terms of service.
        // tosUrl and privacyPolicyUrl accept either url string or a callback
        // function.
        tosUrl: "<your-tos-url>",
        privacyPolicyUrl: function () {
            window.location.assign("<your-privacy-policy-url>");
        },
    };

    // Now expose the components in the store.
    firebaseApp.set(app)
    firebaseAuth.set(auth)
    firebaseStorage.set(storage)
    firebaseAuthUi.set(authUi)
    firebaseAuthConfig.set(uiConfig)
}

