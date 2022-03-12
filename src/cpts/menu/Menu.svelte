<script>
    import Link from "../common/Link.svelte"
    import DrawingInfo from "./DrawingInfo.svelte"
    import {sideBarComponent, sideBarTitle} from "../sidebar/sidebarstore"


    function displayDrawingInfo() {
        sideBarComponent.set(DrawingInfo);
        sideBarTitle.set("DRAWING DETAILS");
    }
</script>

<div class=menu>
    <Link title="Drawing Info" clickHandler={displayDrawingInfo}/>
</div>

<style>
    .menu {
        display:flex;
        flex-direction:column;
    }
</style>
