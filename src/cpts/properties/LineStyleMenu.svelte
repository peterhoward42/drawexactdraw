<script>
    import { currentLineStyle } from "./propertiesstore";

    $: localLineStyle = $currentLineStyle

    function handleWeight() {
        // Calculate the next (nudged) line weight and update the style in the
        // store accordingly.
        let curWeight = localLineStyle.Style.Weight
        let newWeight = (curWeight + 1) % 3
        localLineStyle.Style.Weight = newWeight
        $currentLineStyle = localLineStyle

        // Message WASM to tell it that the user changed the line style.
        // Nb. The payload includes the target element to edit in-situ.
        msgBusPubString("ui:changedlinestyle", JSON.stringify(localLineStyle))
    }

    function handleStartArrow() {
        // Calculate the next (nudged) end terminator style and update the style in the
        // store accordingly.
        let curTerm = localLineStyle.Style.StartTerm
        let newTerm = (curTerm + 1) % 3
        localLineStyle.Style.StartTerm = newTerm
        $currentLineStyle = localLineStyle

        // Message WASM to tell it that the user changed the line style.
        // Nb. The payload includes the target element to edit in-situ.
        msgBusPubString("ui:changedlinestyle", JSON.stringify(localLineStyle))
    }

    function handleEndArrow() {
        // Calculate the next (nudged) end terminator style and update the style in the
        // store accordingly.
        let curTerm = localLineStyle.Style.EndTerm
        let newTerm = (curTerm + 1) % 3
        localLineStyle.Style.EndTerm = newTerm
        $currentLineStyle = localLineStyle

        // Message WASM to tell it that the user changed the line style.
        // Nb. The payload includes the target element to edit in-situ.
        msgBusPubString("ui:changedlinestyle", JSON.stringify(localLineStyle))
    }

    function handleDashes() {
        // Calculate the next (nudged) dash style and update the style in the
        // store accordingly.
        let curDashes = localLineStyle.Style.FullOrDashed
        let newDashes = (curDashes + 1) % 3
        localLineStyle.Style.FullOrDashed = newDashes
        $currentLineStyle = localLineStyle

        // Message WASM to tell it that the user changed the line style.
        // Nb. The payload includes the target element to edit in-situ.
        msgBusPubString("ui:changedlinestyle", JSON.stringify(localLineStyle))
    }
</script>

<div class="menu">
    <div class="label">Thickness</div>
    <div class="btn" on:click={handleWeight}>&#x00BB;</div>

    <div class="label">Dash Pattern</div>
    <div class="btn" on:click={handleDashes}>&#x00BB;</div>

    <div class="label">Start Arrow</div>
    <div class="btn" on:click={handleStartArrow}>&#x00BB;</div>

    <div class="label">End Arrow</div>
    <div class="btn" on:click={handleEndArrow}>&#x00BB;</div>
</div>

<style>
    .menu {
        display: grid;
        gap: 0px 5px;
        grid-template-columns: auto auto ; 
        align-items: center;
        background-color: #333;
        padding: 5px;
    }
    .menu .btn {
        font-size: 16px;
        color: white;
        background-color: #666;
        margin: 3px;
        padding-left: 7px;
        padding-right: 7px;
        padding-top: 0px;
        padding-bottom: 0px;
    }
    .menu .btn:hover {
        background-color: #444;
    }

</style>
