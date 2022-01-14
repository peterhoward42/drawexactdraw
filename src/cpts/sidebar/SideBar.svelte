<script>
    import { sideBarComponent } from "./sidebarstore.js";
    import { sideBarTitle } from "./sidebarstore.js";

    const dismiss = () => sideBarComponent.set(null);
</script>

<div class="sidebar">
    <div class="header">
        <div class="title">{$sideBarTitle}</div>
        <div class="standout-ctrl small w3-button w3-ripple" on:click={dismiss}>
            &times;
        </div>
    </div>
    <div class="sidebar-cpt">
        <svelte:component this={$sideBarComponent} />
    </div>
</div>

<style>
    .sidebar {
        background-color: #222;
    }
    .header {
        display: flex;
        background-color: #222;
    }
    .title {
        flex-grow: 1;
        align-self: center;
        color: white;
    }
    .sidebar-cpt {
        background-color: #333;
    }
</style>
