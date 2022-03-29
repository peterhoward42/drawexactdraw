import page from "page";

// This function is provided as the on-success callback to firebaseui. It gets
// called IFF the user successfully signs in. It's role is to be the gate keeper
// for further initialising the App when the user becomes known.
export function handleSignInSuccess(authResult) {
    var user = {
        "email": authResult.user.email,
        "displayName": authResult.user.displayName,
        "firebaseAccessToken": authResult.credential.accessToken,
    }
    waitForWasmToBeReady().then(bootstrapWithKnownUser(user));
    return false;
}

// waitForWasmToBeReady loops at 100ms intervals until such time as
// the WASM module is loaded and running, such that its msgBusPubString() function
// is available in the javascript namespace.
async function waitForWasmToBeReady() {
    let myInterval = setInterval(function () {
        if (typeof msgBusPubString == "function") {
            clearInterval(myInterval);
        }
    }, 100);
}

// bootstrapWithKnownUser knows how to tell the WASM module that the
// user has just become known in this session. That will determine in turn
// what UX the user will see next - but the javascript App is not opinionated
// about that - (it waits for a a steer from WASM).
async function bootstrapWithKnownUser(user) {
    console.log("XXXX (draw) bootstrapWithKnownUser()")
    msgBusPubString("ui:usersignedin", JSON.stringify(user))
}