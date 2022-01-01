<script>
    import { rayLength, rayMode, customAngle } from "./toolbarstore.js";

    // We use a local variable to specify what the Exact Input box should
    // render, so that we can multplex the Input for different purposes,
    // depending on circumstances.
    let valueForExactInputBox = 42;
    let lastKnownRayLength;
    let lastKnownCustomAngle;

    rayLength.subscribe(handleStoredRayLengthChanged);
    rayMode.subscribe(handleStoredRayModeChanged);
    customAngle.subscribe(handleStoredCustomAngleChanged)

    // When the ray length gets changed in the store, that tells us that
    // we should be presenting that value in the Input box.
    function handleStoredRayLengthChanged(newRayLength) {
        lastKnownRayLength = newRayLength
        valueForExactInputBox = newRayLength;
    }

    function handleStoredCustomAngleChanged(newCustomAngle) {
        lastKnownCustomAngle = newCustomAngle
    }

    // When the ray mode changes we refresh the Exact Input box to the last
    // known good value so that in the special case of it being "customangle", we
    // can re-purpose the input to let the user edit the custom angle.
    function handleStoredRayModeChanged(newRayMode) {
        if (newRayMode == "customangle") {
            valueForExactInputBox = lastKnownCustomAngle
        } else {
            valueForExactInputBox = lastKnownRayLength
        }
    }

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
