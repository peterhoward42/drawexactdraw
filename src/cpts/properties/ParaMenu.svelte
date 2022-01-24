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

<div class="menu bg-dark">
    <div class="std-label small">Justify</div>
    <NudgeBtn onNudgeHandler={handleJustification} />

    <div class="std-label small">Height</div>
    <input
        class="height input std-ctrl small"
        size="5"
        bind:value={localTextHeight}
    />

    <div class="std-label small">Angle</div>
    <input class="input std-ctrl small" size="5" bind:value={localAngle} />

    <div class="txtlabel std-label small">Text</div>
    <textarea
        class="text std-ctrl small "
        rows="6"
        cols="35"
        bind:value={localLines}
    />
</div>

<style>
    .menu {
        display: grid;
        gap: 10px 10px;
        grid-template-columns: auto auto;
        align-items: center;
        justify-items: start;
        padding: 5px;
    }

    .txtlabel {
        align-self: flex-start;
    }

    .input {
        border-top-style: hidden;
        border-right-style: hidden;
        border-left-style: hidden;
        border-bottom-style: groove;
    }
    .input:focus {
        outline: none;
    }

    .text {
        resize: vertical;
    }
</style>
