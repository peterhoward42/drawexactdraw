<script>
    export let onNudgeHandler;
</script>

<div
    class="nudge-btn std-ctrl small w3-button w3-ripple"
    on:click={onNudgeHandler}
>
    &#9654;
</div>

<style>
    .nudge-btn {
        border: 1px solid cornflowerblue;
        border-radius: 5px;
        padding: 1px 5px 1px 5px;
    }
</style>
