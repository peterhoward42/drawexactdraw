<script>
    import Link from "../common/Link.svelte";

    function handleGoToDrawings() {
        console.log("XXXX handleGoToDrawins() fired");
    }
</script>

<div class="q_bg">
    <Link title="Go To Drawings" clickHandler={handleGoToDrawings} />
</div>

<style>
</style>
