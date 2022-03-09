<script>
    import CoordGrid from "./CoordGrid.svelte";
    import Ray from "./Ray.svelte";
    import Keys from "./KeysBtn.svelte";
    import MenuBtn from "./MenuBtn.svelte";
</script>

<div class="toolbar">
    <Ray />
    <CoordGrid />
    <Keys />
    <MenuBtn />
</div>

<style>
    .toolbar {
        display: flex;
        flex-direction: row;
        align-items: center;
        padding-left: 5px;
        padding-right: 5px;
        padding-top: 3px;
        padding-bottom: 3px;
        gap: 50px; 
    }
</style>
