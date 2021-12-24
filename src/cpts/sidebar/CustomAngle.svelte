<script>
    import { customAngle } from "./store.js";
    
    function handleCustomAngle(evt) {
        console.log("XXXX handleCustomAngle received: ", evt.target.value)
    }

</script>

<input class="input" value={$customAngle} on:keyup={handleCustomAngle}>

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