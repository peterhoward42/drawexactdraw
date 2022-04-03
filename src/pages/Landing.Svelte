<script>
    /*
    This component is the landing page for the App.
    */
    import { onMount } from "svelte";
    import { waitForWasmToBeReady } from "../services/handlelifecycle";

    onMount(() => {
        const interval = setInterval(function () {
            if (typeof msgBusPubString == "function") {
                clearInterval(interval);
                console.log("XXXX sending booted")
                msgBusPubString("ui:isbooted", "");
            }
        }, 100);
    });
</script>

<div>Initializing, please wait...</div>

<style>
</style>
