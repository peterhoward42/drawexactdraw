<script>
    import { rayLength, rayMode, customAngle } from "./toolbarstore.js";
    import tooltip from "../common/tooltip.js";
    import NudgeBtn from "../common/NudgeBtn.svelte";

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
    <div class="q_txt q_attenuated">
        Ray Length
    </div>
    <input
        class="q_input"
        value={valueForExactInputBox}
        size=7
        use:tooltip
        title="Change Ray Length"
        on:keyup={handleExactInputValueChanged}
    />

    <div class="q_txt q_attenuated ray-type-lbl">
        Ray Type
    </div>

    <NudgeBtn onNudgeHandler={emitIncrementRayMode} />
</div>

<style>
    .raycontrols {
        display: flex;
        align-items: flex-center;
        gap: 10px;
    }
    .ray-type-lbl {
        margin-left: 20px;
    }
</style>
