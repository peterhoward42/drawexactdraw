<script>
    import CoordGrid from "./CoordGrid.svelte"
    import Ray from "./Ray.svelte"
</script>

<div class=toolbar>
    <Ray/>
    <CoordGrid/>
</div>

<style>
    .toolbar {
        display: flex;
        flex-direction: row;
        align-items: stretch;
        column-gap: 7px;
        background-color: #222;
        padding: 3px;
    }
</style>