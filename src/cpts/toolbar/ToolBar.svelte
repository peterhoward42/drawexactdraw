<script>
    import Exact from "./Exact.svelte"
    import Coords from "./Coords.svelte"
    import RayMode from "./Raymode.svelte"
    import Error from "./Error.svelte"
</script>

<div class=toolbar>
    <Exact/>
    <RayMode/>
    <Coords/>
    <Error/>
</div>

<style>
    .toolbar {
        display: flex;
        flex-direction: row;
        align-items: center;
        column-gap: 5px;
        background-color: #666;
    }
</style>