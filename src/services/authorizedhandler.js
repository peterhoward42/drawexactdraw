import page  from "page";

// This function is provided as the on-success callback to firebaseui. It gets
// called IFF the user successfully signs in. It's role is to be the gate keeper
// for further initialising the App when the user becomes known.
export function handleSignInSuccess(authResult) {
    console.log("XXXX sign in callback fired with authResult: ", authResult)
    waitForWasmToBeReady().then(bootstrapWithKnownUser());
    return false;
}

async function waitForWasmToBeReady() {
    console.log("XXXX arrived in waitForWasmToBeReady");
    let myInterval = setInterval(async function () {
        if (typeof msgBusPubString == "function") {
            clearInterval(myInterval);
            console.log("XXXX msgBusPubString has arrived");
        }
    }, 100);
}

async function bootstrapWithKnownUser() {
    console.log("XXXX arrived in bootstrapWithKnownUser()")
}