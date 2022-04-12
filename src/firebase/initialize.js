// Firebase third party imports.
import firebase from "firebase/compat/app";
import { browserLocalPersistence, initializeAuth } from "firebase/auth";
import * as firebaseui from "firebaseui";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";


// Local imports.
import { firebaseConfig } from './config.js'
import { handleSignInSuccess } from "../services/handlelifecycle.js";

// We create a bundle of integrated firebase services - with
// module-scope, but we do not expose them outside this module.
//
// Clients that want to use the services, should do so by calling the API functions
// exported by this package.
//
// We do this to make sure all client code that uses the services, use
// the single instances - which have been configured the way we want.

const firebaseApp = firebase.initializeApp(firebaseConfig);
// We want to keep the user logged in on this device,
// forever - across browser restarts - until, or if, they explicitly choose to log out.
const persistenceModel = { persistence: browserLocalPersistence };
const auth = initializeAuth(firebaseApp, persistenceModel);
const firebaseStorage = getStorage(firebaseApp);


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

// The client should call this function to bring up the sign-in UI. It depends
// on a target place-holder DIV being loaded in the DOM.
export function startAuthUi() {
    authUi.start("#firebaseui-auth-container", uiConfig);
}

// The client should call this function to save a drawing in Firebase
// cloud storage.
export function saveDrawing(drawingName, serializedDrawingAsBlob) {
    const uid = auth.currentUser.uid;
    const path = 'user/' + uid  + '/drawings/' + drawingName
    const storageRef = ref(firebaseStorage, path);
    const uploadTask = uploadBytesResumable(storageRef, serializedDrawingAsBlob); // Async.
    // The Firebase service responds to errors by retrying (internally), but
    // for our use case we prefer to reveal an error and stop after a short timeout.
    let uploadComplete = false
    const timeoutInMilliseconds = 1000;
    setTimeout(() => {
        console.log("XXXX timeout fired");
        if (!uploadComplete) {
            console.log("XXXX upload not complete - so killing it")
            uploadTask.cancel(); // Todo: emit error info here.
        }
    }, timeoutInMilliseconds)

    // Observe the progress of the upload...
    uploadTask.on('state_changed',
        (snapshot) => {
            // Can measure paused/resumed/bytes-transferred here.
        },
        (error) => {
            // A full list of error codes is available at
            // https://firebase.google.com/docs/storage/web/handle-errors
            switch (error.code) {
                case 'storage/unauthorized':
                    // User doesn't have permission to access the object
                    console.log('XXXX Errored unauthorized');
                    break;
                case 'storage/canceled':
                    // Our save timeout fired.
                    console.log('XXXX Catching timeout fired');
                    break;

                case 'storage/unknown':
                    // Unknown error occurred, inspect error.serverResponse
                    console.log('XXXX Other errored code: ', error.code)
                    break;
            }
        },
        () => {
            // Upload completed successfully, now we could get the download URL
            uploadComplete = true;
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                console.log('XXXX Save ok, file available at', downloadURL);
            });
        }
    );
}
