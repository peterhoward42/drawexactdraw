<script>
    import Menu from "../menu/Menu.svelte"
    import Link from "../common/Link.svelte"
    import {sideBarComponent, sideBarTitle} from "../sidebar/sidebarstore"
    
    function showMenu() {
        sideBarComponent.set(Menu);
        sideBarTitle.set("MENU");
    }
</script>

<Link title="Menu" clickHandler={showMenu}/>

<style>
</style>