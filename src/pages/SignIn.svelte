<script>
    /*
    This component is the first page any non-logged in user will see, and has the
    single responsibility to ask the user to identify and authenticate 
    themselves (using Firebase).
    
    It is the App's entry point gatekeeper page.
    */
    import firebase from "firebase/compat/app";
    import * as firebaseui from "firebaseui";
    import "firebaseui/dist/firebaseui.css";
    import { tick, onMount } from "svelte";

    import { handleSignInSuccess } from "../services/handlelifecycle.js";

    var firebaseUi = new firebaseui.auth.AuthUI(firebase.auth());

    var uiConfig = {
        signInSuccessUrl: "unused",
        signInFlow: "popup",
        callbacks: {
            signInSuccessWithAuthResult: handleSignInSuccess,
            uiShown: function () {
                console.log("XXXX auth ui shown callback fired");
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

    onMount(() => {
        tick();
        firebaseUi.start("#firebaseui-auth-container", uiConfig);
    });
</script>

<div>
    <div>This is sign in page header</div>

    <div id="firebaseui-auth-container" />

    <div>This is sign in page footer</div>
</div>

<style></style>
