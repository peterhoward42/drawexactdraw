<script>
    import { currentPara } from "./propertiesstore";

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

<div class="menu bg2">
    <div class="label small">Justify</div>
    <div
        class="standout-ctrl small w3-button w3-ripple"
        on:click={handleJustification}
    >
        &#9654;
    </div>

    <div class="label small">Height</div>
    <input class="menuinput standout-ctrl small" bind:value={localTextHeight} />

    <div class="label small">Angle</div>
    <input class="menuinput standout-ctrl small " bind:value={localAngle} />

    <div class="txtlabel label small">Text</div>
    <textarea class="standout-ctrl small " rows="6" cols="35" bind:value={localLines} />
</div>

<style>
    .menu {
        display: grid;
        gap: 20px 5px;
        grid-template-columns: auto auto;
        align-items: center;
        padding: 5px;
    }
    .label {
        color: white;
    }

    .txtlabel {
        align-self: flex-start;
    }

    .menuinput {
        border-top-style: hidden;
        border-right-style: hidden;
        border-left-style: hidden;
        border-bottom-style: groove;
    }
    .menuinput:focus {
        outline: none;
    }
</style>
