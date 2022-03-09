<script>
    export let clickHandler
    export let title
</script>

<div class="link q_txt" on:click={clickHandler}>
    {title}
</div>

<style>
    .link:hover {
        text-decoration: underline;
    }
    .link:active {
        color: #222;
    }
</style>