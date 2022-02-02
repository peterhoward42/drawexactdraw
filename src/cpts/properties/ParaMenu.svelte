<script>
    import { currentPara } from "./propertiesstore";
    import NudgeBtn from "../common/NudgeBtn.svelte";

    // We subscribe to the store paragraph properties.
    $: localPara = $currentPara;

    // We bind these local variables to their corresponding input elements,
    // but also make them track changes taking place to the stored object.
    let localTextHeight = $currentPara.TextHeight;
    let localLines = $currentPara.Lines;
    let localAngle = $currentPara.Angle;

    // A set of handlers for when the user edits the fields that have
    // an input element.
    $: {
        handleHeight(localTextHeight);
    }
    $: {
        handleLines(localLines);
    }
    $: {
        handleAngle(localAngle);
    }

    function handleJustification() {
        let curJustification = $currentPara.Justification;
        let newJustification = (curJustification + 1) % 3;
        $currentPara.Justification = newJustification;
        // Message WASM to tell it that the user changed the paragraph.
        msgBusPubString("ui:changedpara", JSON.stringify($currentPara));
    }

    function handleHeight() {
        // Update the store - noting that we are setting a property *inside*
        // a store object - which does not fire the subscribers.
        $currentPara.TextHeight = localTextHeight;
        // Message WASM to tell it that the user changed the paragraph.
        msgBusPubString("ui:changedpara", JSON.stringify($currentPara));
    }

    function handleLines() {
        // Update the store - noting that we are setting a property *inside*
        // a store object - which does not fire the subscribers.
        $currentPara.Lines = localLines;
        // Message WASM to tell it that the user changed the paragraph.
        msgBusPubString("ui:changedpara", JSON.stringify($currentPara));
    }

    function handleAngle() {
        // Update the store - noting that we are setting a property *inside*
        // a store object - which does not fire the subscribers.
        $currentPara.Angle = localAngle;
        // Message WASM to tell it that the user changed the paragraph.
        msgBusPubString("ui:changedpara", JSON.stringify($currentPara));
    }
</script>

<div class="menu">
    <div class=" q_txt">Justify</div>
    <NudgeBtn onNudge={handleJustification} />

    <div class=" q_txt">Height</div>
    <input class="height q_input" size="5" bind:value={localTextHeight} />

    <div class=" q_txt">Angle</div>
    <input class="q_input " size="5" bind:value={localAngle} />

    <div class="q_txt text_label">Text</div>
    <textarea class="text q_textarea " rows="6" cols="35" bind:value={localLines} />
</div>

<style>
    .menu {
        display: grid;
        gap: 20px 20px;
        grid-template-columns: auto auto;
        align-items: center;
        justify-items: start;
        padding: 5px;
    }

    .text {
        resize: vertical;
    }

    .text_label {
        align-self: flex-start;
    }
</style>
