<script>
    export let label;
    export let value;
</script>

<style>
    .single-coord {
        display: flex;
        font-size: 8pt;
        gap: 5px;
        padding-right: 5px;
        padding-left: 5px;
    }
    .label {
        color: #DDD;
    }
    .value {
        color: #AAA;
        width: 6em;
    }
</style>

<div class="single-coord">
    <div class="label">{label}:</div>
    <div class="value">{value}</div>
</div>
