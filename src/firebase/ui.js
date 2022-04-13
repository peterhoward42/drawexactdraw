import { get } from 'svelte/store';
import { firebaseAuthUi, firebaseAuthConfig } from "./store.js"

// Call this function to instantiate the Firebase UI component in the current
// DOM.
export function startFirebaseAuthUi() {
    const authUi = get(firebaseAuthUi)
    const uiConfig = get(firebaseAuthConfig)
    authUi.start("#firebaseui-auth-container", uiConfig);
}
