<script>
    export let label;
    export let value;
</script>


<div class="single-coord">
    <div class="q_txt q_attenuated">{label}:</div>
    <div class="q_txt value">{value}</div>
</div>

<style>
    .single-coord {
        display: flex;
        gap: 5px;
    }
    .value {
        width: 7em;
    }
</style>
