<script>
    import { rayLength, rayMode, customAngle } from "./toolbarstore.js";
    import tooltip from "../common/tooltip.js";

    // We use a local variable to specify what the Exact Input box should
    // render, so that we can multplex what the Input box shows depending on the
    // current ray mode.
    let valueForExactInputBox = 42;
    let lastKnownRayLength;
    let lastKnownCustomAngle;
    let currentRayMode;

    // We need to receive notifications when WASM sends us new validated values
    // for the currnet: ray length, ray mode, and ray custom angle value.
    // Nb. This is despite those values being sourced in the first place by
    // this UI component, because we wish to react only to validated changes
    // that the WASM is now regarding as the truth.
    rayLength.subscribe(handleStoredRayLengthChanged);
    rayMode.subscribe(handleStoredRayModeChanged);
    customAngle.subscribe(handleStoredCustomAngleChanged);

    // When we receive a newly validated ray length from WASM, we need to
    // show it in our Input box, and remember the value locally, so that we can
    // revert to it if necessary.
    function handleStoredRayLengthChanged(newRayLength) {
        lastKnownRayLength = newRayLength;
        valueForExactInputBox = newRayLength;
    }

    // When we receive a newly validated custom ray angle from WASM, we need
    // to remember it. We don't need to update the bound local value for the Input
    // box, because the change to the value must have originated from there,
    // and still be showing.
    function handleStoredCustomAngleChanged(newCustomAngle) {
        lastKnownCustomAngle = newCustomAngle;
    }

    // When the ray mode changes, in general, we force the Exact Input box to
    // show the last known ray length. But in the special case we re-purpose
    // the Input box to let the user edit the custom ray angle, and hence need
    // to make it show that current value.
    function handleStoredRayModeChanged(newRayMode) {
        currentRayMode = newRayMode;
        if (newRayMode == "customangle") {
            valueForExactInputBox = lastKnownCustomAngle;
        } else {
            valueForExactInputBox = lastKnownRayLength;
        }
    }

    // Whenever the user changes the value in the Exact Input box, we simply
    // alert WASM accordingly - and need not take an interest in the context.
    // (The contextualisation is handled on the WASM side).
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
        value={valueForExactInputBox}
        use:tooltip
        title="Change Ray Length"
        on:keyup={handleExactInputValueChanged}
    />

    <!-- Note this button shows either a sun-ray symbol or an angle symbol 
    conditionally. The click behaviour does not differ - it is only a visual
    cue for the user about what they are editing. -->
    <div
        class="mode-button w3-button w3-ripple"
        use:tooltip
        title="Change Ray Pattern"
        on:click={emitIncrementRayMode}
    >
    {#if currentRayMode === "customangle"}
        &#x2220;
    {:else}
        &#x2600;
    {/if}
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
        color: yellow;
    }
    .mode-button {
        font-size: 20px;
        padding: 0px 5px 0px 5px;
        background-color: #333;
        color: yellow;
        border: thin solid #444;
    }
</style>
