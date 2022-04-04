<script>
    /*
    This component is the page that presents a drawing and lets the user
    interact with it. It is this page that instantiates the "drawing" mode
    DIV that the WASM module depends on. The WASM module is dependent from that
    point onwards on that DIV being present, and for some communications between
    WASM and javascript. Consequently, the javascript app must be designed to 
    prevent the any subsequent changes to the main page component presented.
    */
    import { onMount } from "svelte";

    import { sideBarComponent } from "../cpts/sidebar/sidebarstore";
    import { doOnMountOpsForDrawingPage } from "../services/drawingpageonmount";

    import ToolBar from "../cpts/toolbar/ToolBar.svelte";
    import SideBar from "../cpts/sidebar/SideBar.svelte";
    import AdviceModal from "../cpts/advice/advicemodal.svelte";

    // We delegate the onMount initialization for this component to a helper.
    onMount(async () => {doOnMountOpsForDrawingPage(sideBarComponent)});

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
