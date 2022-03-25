
// This function is provided as a callback to the firebaseui. It gets
// called IFF the user successfully signs in.
export function handleSignInSuccess(authResult) {
    console.log("XXXX sign in callback fired with authResult: ", authResult)
    // Returning false tells the firebaseui UI that we DO NOT want *it* to mandate
    // the browser to redirect to a different page. (We'll handle that ourselves).
    return false;
}