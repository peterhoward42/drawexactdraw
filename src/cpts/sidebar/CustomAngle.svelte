<script>
    import { initialCustomAngle } from "./sidebarstore.js";
    
    function handleCustomAngle(evt) {
        msgBusPubString("ui:customangle", evt.target.value)
    }

</script>

<div class="customangle">
    <div class="prompt">
        Custom Angle &#176; 
    </div>
    <input class="input" value={$initialCustomAngle} on:keyup={handleCustomAngle}>
</div>

<style>
    .customangle {
        display: flex;
        flex-direction: column;
        gap: 3px;
        background-color: #AAA;
        padding: 7px;
    }
    .input {
        font-size: 9pt;
    }
    .prompt {
        font-size: 9pt;
    }
</style>