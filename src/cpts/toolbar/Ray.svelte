<script>
    import { rayLength } from "./toolbarstore.js";

    function handleExactInputValueChanged(evt) {
        msgBusPubString("ui:exactinput", evt.target.value);
    }
    function emitIncrementRayMode() {
        msgBusPubString("ui:incrementraymode", null);
    }
</script>

<div class="raycontrols">
    <input
        class="input"
        value={$rayLength}
        on:keyup={handleExactInputValueChanged}
    />
    <div
        class="mode-button w3-button w3-ripple"
        on:click={emitIncrementRayMode}
    >
        &#x2600;
    </div>
</div>

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
        color: aqua;
    }
    .mode-button {
        font-size: 20px;
        padding: 0px 5px 0px 5px;
        background-color: #333;
        color: aqua;
        border: thin solid #444;
    }
</style>
