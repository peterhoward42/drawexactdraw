<script>
    import { startAuthUi } from '../firebase/initialize.js'

    // This component presents and manages the user sign-in UI.
    
    import { tick, onMount } from "svelte";

    onMount(() => {
        tick();
        startAuthUi();
    });
</script>

<div>
    <div>This is sign in page header</div>

    <div id="firebaseui-auth-container" />

    <div>This is sign in page footer</div>
</div>

<style></style>
