<script>
    export let onNudge;
</script>

<div
    class="q_txt nudge" on:click={onNudge}> &#9654;
</div>

<style>
    .nudge {
        padding: 2px 5px 1px 5px;
        border: 1px solid #777;
        border-radius: 5px;

    }
    .nudge:hover {
        color: #555;
        border: 1px solid #555;

    }
    .nudge:active {
        color: #777;
        border: 1px solid #777;
    }
</style>
