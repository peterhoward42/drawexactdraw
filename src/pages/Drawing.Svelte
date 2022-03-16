<script>
    import { onMount, tick } from "svelte";

    import { sideBarComponent } from "./cpts/sidebar/sidebarstore";
    import { interpretMessage } from "./services/messageInterpreter.js";
    import { makeOnMountHandlerForEntireApp } from "./services/makeonmounthandler.js";

    import ToolBar from "./cpts/toolbar/ToolBar.svelte";
    import SideBar from "./cpts/sidebar/SideBar.svelte";
    import AdviceModal from "./cpts/advice/advicemodal.svelte";

    // Put a function into the global namespace, that WASM can call in order
    // to send messages to javascript.
    window.receiveMsgFromWasm = interpretMessage;

    // Register an async function to handle the initialization steps that
    // can only be done after this component is mounted to the DOM.

    // todo rename this - because it is no longer for the entire app.
    onMount(makeOnMountHandlerForEntireApp(sideBarComponent, tick));
</script>

<div class="page q_bg">
    <ToolBar />
    <div class="main-content">
        {#if $sideBarComponent}
            <SideBar />
        {/if}
        <div class="drawingzone" id="drawingzone" />
    </div>

    <!-- Insert the  AdviceModal into the DOM, (its CSS hides itself) -->
    <AdviceModal />
</div>

<style>
    .page {
        display: flex;
        flex-direction: column;
        height: 100vh;
    }
    .main-content {
        display: flex;
        flex-grow: 1;
    }
    .drawingzone {
        flex-grow: 1;
        outline: none;
    }
</style>
