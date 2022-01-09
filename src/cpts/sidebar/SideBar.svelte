<script>
    import { sideBarComponent } from "./sidebarstore.js";

    const dismiss = () => sideBarComponent.set(null);

</script>

<div class="sidebar">
    <div class="w3-button w3-block w3-ripple w3-teal w3-right-align" on:click={dismiss}>
        &times;
    </div>
    <svelte:component this={$sideBarComponent} />
</div>

<style>
    .sidebar {
        background-color: #222;
    }
</style>
