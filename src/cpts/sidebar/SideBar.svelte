<script>
    import { sideBarComponents } from './store.js'
</script>

<div class="sidebar">
    {#each $sideBarComponents as cpt}
        <svelte:component this={cpt} />
    {/each}
</div>

<style>
    .sidebar {
        display: flex;
        flex-direction: column;
        gap: 5px;
    }
</style>
