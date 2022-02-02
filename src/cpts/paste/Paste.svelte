<script>

    function handleTransformChanged(evt) {
        msgBusPubString("ui:usertransforms", evt.target.value);
    }

</script>

<div class="paste">
    <div class="q_txt ">Number of Copies</div>
    <input class="q_input" size="5" value="1" />

    <div class="q_txt ">Transform</div>
    <input
        class="q_input"
        size="20"
        on:keyup={handleTransformChanged}
        value="s1"
    />

    <div class="trans-heading q_heading ">TRANSFORM HELP</div>

    <div class="q_txt ">Combine:</div>
    <div class="q_txt">scale, rotate, mirror</div>

    <div class="q_txt ">Like this:</div>
    <div class="q_txt">s0.5 r90 m1 r-90 ...</div>
</div>

<style>
    .paste {
        display: grid;
        grid-template-columns: auto auto;
        column-gap: 15px;
        row-gap: 10px;
        justify-items: flex-start;
    }

    .trans-heading {
        grid-column-start: span 2;
        margin-top: 15px;
    }
</style>
