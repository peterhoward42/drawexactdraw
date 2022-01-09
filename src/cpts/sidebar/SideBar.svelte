<script>
    import { sideBarComponent } from "./sidebarstore.js";
</script>

<div class=sidebar>
    <svelte:component this={$sideBarComponent} />
</div>

<style>
    .sidebar {
        background-color: #222;
    }
</style>
