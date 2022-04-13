import { get } from 'svelte/store';
import { firebaseAuth } from "./store.js"

// Returns true if there is currently a user signed in to Firebase.
export function isThereAUserSignedIn() {
    const auth = get(firebaseAuth)
    return auth.currentUser != null
}