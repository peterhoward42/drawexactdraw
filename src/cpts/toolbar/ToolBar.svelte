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
        align-items: flex-center;
        margin: 5px;
        gap: 50px;
    }
</style>