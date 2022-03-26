<script>
    /*
    This module is the main entry point for the App ONCE THE USER's IDENTITY is known.
    */

    import { onMount } from "svelte";

    // Wait for WASM load to complete -  as evidenced by the messaging function
    // msgBusPubString becoming available. (I.e. a function that lets the
    // javascript to send messages to the WASM module.)
    onMount(bootstrapWithKnownUser);

    async function bootstrapWithKnownUser() {
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
