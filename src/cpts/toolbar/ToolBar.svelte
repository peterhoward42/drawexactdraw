<script>
    import CoordGrid from "./CoordGrid.svelte"
    import Ray from "./Ray.svelte"
    import Keys from "./KeysBtn.svelte"
</script>

<div class=toolbar>
    <Ray/>
    <CoordGrid/>
    <Keys/>
</div>

<style>
    .toolbar {
        display: flex;
        flex-direction: row;
        align-items: flex-center;
        margin-left: 5px;
        margin-right: 5px;
        margin-top: 5px;
        gap: 50px;
    }
</style>