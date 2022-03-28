<script>
    /*
    This component is the landing page from the user's perspective, and has the
    single responsibility to ask the user to identify and authenticate 
    themselves (using  Firebase).
    
    It is the App's entry point gatekeeper.
    */
    import { getAnalytics } from "firebase/analytics";
    import firebase from "firebase/compat/app";
    import * as firebaseui from "firebaseui";
    import "firebaseui/dist/firebaseui.css";

    import { handleSignInSuccess } from '../services/handlelifecycle.js'

    // This object constant has to match exactly the config the firebase
    // portal shows you for your project.
    const firebaseConfig = {
        apiKey: "AIzaSyBp4hWn1_e1ADqulCO1N5iWz5z54kTx1eo",
        authDomain: "drawexact.firebaseapp.com",
        projectId: "drawexact",
        storageBucket: "drawexact.appspot.com",
        messagingSenderId: "193591754753",
        appId: "1:193591754753:web:8b8cb9902bf392e6e14000",
        measurementId: "G-F3414F7H16",
    };

    const firebase_app = firebase.initializeApp(firebaseConfig);
    const analytics = getAnalytics(firebase_app);
    var firebaseUi = new firebaseui.auth.AuthUI(firebase.auth());

    var uiConfig = {
        signInSuccessUrl: "unused",
        signInFlow: "popup",
        callbacks: {
            signInSuccessWithAuthResult: handleSignInSuccess,
            uiShown: function () {
                console.log("XXXX auth ui shown callback fired")
            },
        },
        signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID],
        // tosUrl and privacyPolicyUrl accept either url string or a callback
        // function.
        tosUrl: "<your-tos-url>",
        privacyPolicyUrl: function () {
            window.location.assign("<your-privacy-policy-url>");
        },
    };

    // The start method will wait until the DOM is loaded.
    firebaseUi.start("#firebaseui-auth-container", uiConfig);
</script>

<div>
    <div>This is sign in page header</div>

    <div id="firebaseui-auth-container" />

    <div>This is sign in page footer</div>
</div>

<style></style>
