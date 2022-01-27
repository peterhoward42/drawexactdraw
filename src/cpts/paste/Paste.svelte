<script>
</script>

<div class="paste bg-dark">
    <div class="inputs">
        <div class="std-label small">Number of Copies</div>
        <input class="input std-ctrl small" size="5" value="1" />

        <div class="std-label small">Transform</div>
        <input class="input std-ctrl small mono" size="20" value="s1" />
    </div>

    <div class="transform-help bg-med">
        <div class="format std-label small">Transform Help</div>

        <div class="std-label small">Use:</div>
        <div class="std-label small">scale, rotate, mirror</div>

        <div class="std-label small">Like this:</div>
        <div class="std-label mono small">s0.5 r90 m1 r-90 ...</div>
    </div>
</div>

<style>
    .transform-help {
        display: grid;
        gap: 10px 10px;
        grid-template-columns: auto auto;
        align-items: center;
        justify-items: start;
        padding: 5px;
        margin-left: 5px;
        margin-right: 5px;
        margin-top: 10px;
        margin-bottom: 10px;
        border: 1px solid #666;
        border-radius: 5px;
    }

    .format {
        grid-column-start: span 2;
        justify-self: center;
    }

    .inputs {
        display: grid;
        gap: 10px 10px;
        grid-template-columns: auto auto;
        align-items: center;
        justify-items: start;
        padding: 5px;
    }

    .input {
        border-top-style: hidden;
        border-right-style: hidden;
        border-left-style: hidden;
        border-bottom-style: groove;
    }
    .input:focus {
        outline: none;
    }
</style>
