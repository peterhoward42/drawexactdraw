<script>
    import { currentLineStyle } from "./propertiesstore";
    import NudgeBtn from "../common/NudgeBtn.svelte";

    $: localLineStyle = $currentLineStyle;

    function handleWeight() {
        // Calculate the next (nudged) line weight and update the style in the
        // store accordingly.
        let curWeight = localLineStyle.Style.Weight;
        let newWeight = (curWeight + 1) % 3;
        localLineStyle.Style.Weight = newWeight;
        $currentLineStyle = localLineStyle;

        // Message WASM to tell it that the user changed the line style.
        // Nb. The payload includes the target element to edit in-situ.
        msgBusPubString("ui:changedlinestyle", JSON.stringify(localLineStyle));
    }

    function handleStartArrow() {
        // Calculate the next (nudged) end terminator style and update the style in the
        // store accordingly.
        let curTerm = localLineStyle.Style.StartTerm;
        let newTerm = (curTerm + 1) % 3;
        localLineStyle.Style.StartTerm = newTerm;
        $currentLineStyle = localLineStyle;

        // Message WASM to tell it that the user changed the line style.
        // Nb. The payload includes the target element to edit in-situ.
        msgBusPubString("ui:changedlinestyle", JSON.stringify(localLineStyle));
    }

    function handleEndArrow() {
        // Calculate the next (nudged) end terminator style and update the style in the
        // store accordingly.
        let curTerm = localLineStyle.Style.EndTerm;
        let newTerm = (curTerm + 1) % 3;
        localLineStyle.Style.EndTerm = newTerm;
        $currentLineStyle = localLineStyle;

        // Message WASM to tell it that the user changed the line style.
        // Nb. The payload includes the target element to edit in-situ.
        msgBusPubString("ui:changedlinestyle", JSON.stringify(localLineStyle));
    }

    function handleDashes() {
        // Calculate the next (nudged) dash style and update the style in the
        // store accordingly.
        let curDashes = localLineStyle.Style.FullOrDashed;
        let newDashes = (curDashes + 1) % 3;
        localLineStyle.Style.FullOrDashed = newDashes;
        $currentLineStyle = localLineStyle;

        // Message WASM to tell it that the user changed the line style.
        // Nb. The payload includes the target element to edit in-situ.
        msgBusPubString("ui:changedlinestyle", JSON.stringify(localLineStyle));
    }
</script>

<div class="menu">
    <div class=" q_txt">Thickness</div>
    <NudgeBtn onNudge={handleWeight} />

    <div class=" q_txt">Dash Pattern</div>
    <NudgeBtn onNudge={handleDashes} />

    <div class=" q_txt">Start Arrow</div>
    <NudgeBtn onNudge={handleStartArrow} />

    <div class=" q_txt">End Arrow</div>
    <NudgeBtn onNudge={handleEndArrow} />
</div>

<style>
    .menu {
        display: grid;
        gap: 5px 5px;
        grid-template-columns: auto auto;
        align-items: center;
        padding: 5px;
    }
</style>
