<script>
    import { initialRayLength } from "./toolbarstore.js";

    function handleRayLengthKeyUp(evt) {
        msgBusPubString("ui:raylength", evt.target.value);
    }
    function emitIncrementRayMode() {
        msgBusPubString("ui:incrementraymode", null)
    }
</script>

<style>
    .raycontrols {
        display: flex;
        align-items: stretch;

    }
    .input {
        font-size: 8pt;
        padding: 0px;
        border: thin solid #444;
        margin: 0px;
        padding-left: 3px;
        width: 70px;
        background-color: #333;
        color: #BBB;

    }
    .mode-button {
        font-size: 20px;
        padding: 0px 5px 0px 5px;
        background-color: #333;
        color: #BBB;
        border: thin solid #444;
    }
  
</style>

<div class="raycontrols">
    <input class="input" value={$initialRayLength} on:keyup={handleRayLengthKeyUp}>
    <div class="mode-button w3-button w3-ripple" on:click={ emitIncrementRayMode }>
        &#x2600;
    </div>
</div>
    