<script>
    import SingleCoord from "./SingleCoord.svelte";
    import { readout } from "./toolbarstore";
</script>

<div class="coord-grid">
    <SingleCoord label="X" value={($readout ? $readout.X : "")} />
    <SingleCoord label="Y" value={$readout ? $readout.Y : ""} />
    <SingleCoord label="R" value={$readout ? $readout.R : ""} />
    <SingleCoord label="&#952;" value={$readout ? $readout.Theta : ""} />
</div>

<style>
    .coord-grid {
        display: grid;
        grid-template-columns: auto auto;
        background-color: #333;
        border: thin solid #444;
    }
</style>
