<script>
    import Exact from "./Exact.svelte"
    import Coords from "./Coords.svelte"
    import RayMode from "./Raymode.svelte"
</script>

<div class=toolbar>
    <Exact/>
    <Coords/>
    <RayMode/>
</div>

<style>
    .toolbar {
        display: flex;
        flex-direction: row;
        column-gap: 5px;
    }
</style>