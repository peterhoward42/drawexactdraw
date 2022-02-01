<script>
    export let clickHandler;
</script>

<div
    class="q_txt dismiss" on:click={clickHandler}> &times;
</div>

<style>
    .dismiss {
        padding: 2px 5px 1px 5px;
        border: 1px solid #222;
        border-radius: 5px;

    }
    .dismiss:hover {
        color: #555;
        border: 1px solid #555;

    }
    .dismiss:active {
        color: #222;
        border: 1px solid #222;
    }
</style>
