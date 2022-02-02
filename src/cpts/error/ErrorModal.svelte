<script>
    import { errorMessage } from "./errorstore.js";
    import DismissBtn from "../common/DismissBtn.svelte"

    // We bind to this variable in the html below to provide access to
    // this top level component.
    let thisErrorModalCpt;

    // If the modal has siezed focus, then we interpret a click anwhere outside
    // of it, as a signal to dismiss it.
    window.onclick = function (event) {
        if (event.target == thisErrorModalCpt) {
            thisErrorModalCpt.style.display = "none";
        }
    };

    function dismissModal() {
        document.getElementById('errormodalcpt').style.display='none'
    }
</script>

<div class="w3-modal" id="errormodalcpt" bind:this={thisErrorModalCpt}>
    <div class="modal-content w3-modal-content">
        <div class="header q_heading">
            <div>ERROR</div>
            <DismissBtn clickHandler={dismissModal}></DismissBtn>
        </div>
        <div class="q_txt">
            {$errorMessage}
        </div>
    </div>
</div>

<style> 
    .modal-content {
        background-color: #222;
        padding: 5px;
        width: 400px;
    }
    .header {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
</style>
