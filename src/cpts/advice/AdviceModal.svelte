<script>
    import { advice } from "./advicestore.js";
    import DismissBtn from "../common/DismissBtn.svelte";

    // We bind to this variable in the html below to provide access to
    // this top level component.
    let thisModalCpt;

    // If the modal has siezed focus, then we interpret a click anwhere outside
    // of it, as a signal to dismiss it.
    window.onclick = function (event) {
        if (event.target == thisModalCpt) {
            thisModalCpt.style.display = "none";
        }
    };

    function dismissModal() {
        document.getElementById("advice-modal").style.display = "none";
    }
</script>

<div class="w3-modal" id="advice-modal" bind:this={thisModalCpt}>
    {#if $advice}
        <div class="modal-content w3-modal-content">
            <div class="header q_heading">
                <div class="title q_heading">
                    {$advice.Header}
                </div>
                <DismissBtn clickHandler={dismissModal} />
            </div>
            <ul class="lines">
                {#each $advice.AdviceText as line}
                    <li class="line q_txt">{line}</li>
                {/each}
            </ul>
        </div>
    {/if}
</div>

<style>
    .modal-content {
        background-color: #222;
        padding: 5px;
        width: 600px;
    }
    .header {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
    .line {
        padding: 10px;
    }
   
</style>
