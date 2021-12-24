<script>
    function emitIncrementRayMode() {
        msgBusPubString("ui:incrementraymode", null)
    }
</script>

<div class="sun" on:click={ emitIncrementRayMode }>
    &#x2600;
</div>

<style>
    .sun {
        font-size: 18pt;
        color: #0FF;
       
    }
    .sun:hover {
        color: #0AA;
    }
</style>