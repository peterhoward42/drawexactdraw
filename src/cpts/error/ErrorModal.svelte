<script>
    import { errorMessage } from "./errorstore.js";

    // We bind to this variable in the html below to provide access to 
    // this top level component.
    let thisErrorModalCpt

    // If the modal has siezed focus, then we interpret a click anwhere outside
    // of it, as a signal to dismiss it.
    window.onclick = function (event) {
        if (event.target == thisErrorModalCpt) {
            thisErrorModalCpt.style.display = "none";
        }
    };
</script>

<style>
    .error-cpt {
        color: white;
    }
</style>

<div id="errormodalcpt" class="w3-modal error-cpt" bind:this={thisErrorModalCpt}>
    <div class="w3-modal-content">
        <header class="w3-container bg-med">
            <span
                onclick="document.getElementById('errormodalcpt').style.display='none'"
                class="w3-button w3-display-topright">&times;</span>
            <h4>Error</h4>
        </header>
        <div class="w3-container bg-dark">
            <p>{$errorMessage}</p>
        </div>
    </div>
</div>
