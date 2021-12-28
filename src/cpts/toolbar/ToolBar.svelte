<script>
    import Coords from "./Coords.svelte"
    import Ray from "./Ray.svelte"
</script>

<div class=toolbar>
    <Ray/>
    <Coords/>
</div>

<style>
    .toolbar {
        display: flex;
        flex-direction: row;
        align-items: center;
        column-gap: 5px;
        background-color: #222;
        padding: 5px;
    }
</style>