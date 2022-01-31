<script>
    export let onNudgeHandler;
</script>

<div
    class="q_txt nudge" on:click={onNudgeHandler}> &#9654;
</div>

<style>
    .nudge {
        padding: 2px 5px 1px 5px;
        border: 1px solid #222;
        border-radius: 5px;

    }
    .nudge:hover {
        color: #555;
        border: 1px solid #555;

    }
    .nudge:active {
        color: #222;
        border: 1px solid #222;
    }
</style>
