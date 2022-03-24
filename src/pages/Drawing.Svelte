<script>
    import { onMount, tick } from "svelte";

    import { sideBarComponent } from "../cpts/sidebar/sidebarstore";

    import ToolBar from "../cpts/toolbar/ToolBar.svelte";
    import SideBar from "../cpts/sidebar/SideBar.svelte";
    import AdviceModal from "../cpts/advice/advicemodal.svelte";

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
