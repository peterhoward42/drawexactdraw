<script>   
    import { errorMessage } from "./errorstore.js"
</script>

<style>
</style>

<div id="errormodalcpt" class="w3-modal">
    <div class="w3-modal-content">
        <header class="w3-container w3-teal">
            <span
                onclick="document.getElementById('errormodalcpt').style.display='none'"
                class="w3-button w3-display-topright">&times;</span>
            <h3>Error</h3>
        </header>
        <div class="w3-container">
            <p> { $errorMessage } </p>
        </div>
    </div>
</div>
