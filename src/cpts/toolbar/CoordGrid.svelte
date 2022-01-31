<script>
    import SingleCoord from "./SingleCoord.svelte";
    import { readout } from "./toolbarstore";
</script>

<div class="coords">
    <SingleCoord label="X" value={($readout ? $readout.X : "")} />
    <SingleCoord label="Y" value={$readout ? $readout.Y : ""} />
    <SingleCoord label="R" value={$readout ? $readout.R : ""} />
    <SingleCoord label="&#952;" value={$readout ? $readout.Theta : ""} />
</div>

<style>
    .coords {
        display: flex;
        align-items: flex-center;
    }
</style>
