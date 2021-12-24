<script>
    import { initialRayLength } from "./toolbarstore.js";

    // We allow the user to type in anything in the exact Input control.
    // We capture the input on a key by key basis an send the resultant string
    // to WASM to validate the input and set its internal ray length accordingly.
    // The user gets interactive feedback by seeing the ray geometry change
    // as they type, or an error displayed.
    function handleKeyUp(evt) {
        msgBusPubString("ui:raylength", evt.target.value)
    }
</script>

<input class="input" value={$initialRayLength} on:keyup={handleKeyUp}>

<style>
    .input {
        font-size: 9pt;
        padding: 3px;
        border: thin solid #DDD;
        background-color: #EEE;
        margin: 0px;
        margin-left: 3px;
        width: 100px;
    }
</style>