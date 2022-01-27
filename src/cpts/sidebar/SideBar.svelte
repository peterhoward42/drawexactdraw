<script>
    import { sideBarComponent } from "./sidebarstore.js";
    import { sideBarTitle } from "./sidebarstore.js";

    const dismiss = () => sideBarComponent.set(null);
</script>

<div class="sidebar bg-dark">
    <div class="header">
        <div class="title">{$sideBarTitle}</div>
        <div class="std-ctrl small w3-button w3-ripple" on:click={dismiss}>
            &times;
        </div>
    </div>
    <div class="sidebar-cpt">
        <svelte:component this={$sideBarComponent} />
    </div>
</div>

<style>
    .sidebar {
        padding: 7px;
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
