<script>
    import SingleCoord from "./SingleCoord.svelte";
    import { readout } from "./toolbarstore";

    let xValue;
    let yValue;
    let rValue;
    let thetaValue;

    function handleReadoutChanged(newReadoutObj) {
        if (newReadoutObj == null || newReadoutObj["x"] == undefined) {
            xValue = "";
            yValue = "";
            rValue = "";
            thetaValue = "";
        } else {
            xValue = newReadoutObj["x"];
            yValue = newReadoutObj["y"];
            rValue = newReadoutObj["r"];
            thetaValue = newReadoutObj["theta"];
        }
    }

    readout.subscribe(handleReadoutChanged);
</script>

<div class="coord-grid">
    <SingleCoord label="X" value={xValue} />
    <SingleCoord label="Y" value={yValue} />
    <SingleCoord label="R" value={rValue} />
    <SingleCoord label="&#952;" value={thetaValue} />
</div>

<style>
    .coord-grid {
        display: grid;
        grid-template-columns: auto auto;
        background-color: #333;
        border: thin solid #444;
    }
</style>
