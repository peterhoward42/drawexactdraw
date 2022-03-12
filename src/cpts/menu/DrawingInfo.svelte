<script>
    import { drawingInfo } from "./menustore.js";
</script>

<div class="grid">
    <div class="q_txt ">Name:</div>
    <div class="q_txt ">{$drawingInfo.Name}</div>
    <div class="q_txt ">Units:</div>
    <div class="q_txt ">{$drawingInfo.Units}</div>
    <div class="q_txt ">Scale:</div>
    <div class="q_txt ">{$drawingInfo.Scale}</div>
    <div class="q_txt ">Paper:</div>
    <div class="q_txt ">{$drawingInfo.PaperSize}</div>
</div>

<style>
    .grid {
        display: grid;
        grid-template-columns: auto auto;
        column-gap: 15px;
        row-gap: 10px;
        justify-items: flex-start;
    }
</style>
