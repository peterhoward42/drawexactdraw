// This function is provided as the on-success callback to firebaseui. It gets
// called IFF the user successfully signs in. It's role is to be the gate keeper
// for further initialising the App when the user becomes known.
export function handleSignInSuccess(authResult) {
    console.log("XXXX raw authResult: ", authResult)
    const user = {
        "displayName": authResult.user.displayName,
        "uid": authResult.user.uid,
    }
    bootstrapWithKnownUser(user);
    return false;
}

// bootstrapWithKnownUser knows how to tell the WASM module that the
// user has just become known in this session. That will determine in turn
// what UX the user will see next - but the javascript App is not opinionated
// about that - (it waits for a a steer from WASM).
async function bootstrapWithKnownUser(user) {
    const asJson = JSON.stringify(user)
    console.log("XXXX (draw) bootstrapWithKnownUser(): %s", asJson)
    msgBusPubString("ui:usersignedin", asJson)
}