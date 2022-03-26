import page  from "page";

// This function is provided as a callback to the firebaseui. It gets
// called IFF the user successfully signs in.
export function handleSignInSuccess(authResult) {
    console.log("XXXX sign in callback fired with authResult: ", authResult)
    // We do a client-side router psuedo-redirect now, so then have to
    // return false to signal firebase ui that we're handling the redirect.
    page("/authorized")
    return false;
}