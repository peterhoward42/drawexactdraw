<script>
    /*
    This module is the main entry point for the App after the user has been
    authenticated. It is fired  by a browser redirect mandate returned from
    the Firebase auth system. So we can/must consider it as a brand-new and
    completely new session. I.e. we know that the following has just happened:
        -  The browser was told to redirect to /authorized...
        -  The browser processed index.html
        -  Which started loading our WASM module asyncronously
        -  Meanwhile it called main.js
        -  Which did new SvelteApp
        -  Which:
            -  specifies routes to the "page.js" client side router
            -  which for /authorized sets the store's $currentPage to
               THIS Authorized component
            -  renders $currentPage (ie this component)
    */

    import { onMount } from "svelte";
    import { interpretMessage } from "../services/messageInterpreter.js";

    // To support the new session, put a function into the global namespace,
    // that WASM can call in order to send messages to javascript.
    window.receiveMsgFromWasm = interpretMessage;

    // Wait for WASM load to complete -  as evidenced by the messaging function
    // msgBusPubString becoming available. (I.e. a function that lets the
    // javascript to send messages to the WASM module.)
    onMount(bootstrapWhenWASMIsReady);

    async function bootstrapWhenWASMIsReady() {
        console.log("XXXX arrived in waitForWasmToBeReady");
        let myInterval = setInterval(async function () {
            if (typeof msgBusPubString == "function") {
                clearInterval(myInterval);
                console.log("XXXX msgBusPubString has arrived");
                harvestUserDetails();
            }
        }, 100);
    }

    function harvestUserDetails() {

    }

</script>

<div>Authorized</div>

<style>
</style>
