<script>
    import Keys from "../keys/Keys.svelte"
    import Link from "../common/Link.svelte"
    import {sideBarComponent, sideBarTitle} from "../sidebar/sidebarstore"
    
    function showKeysReminder() {
        sideBarComponent.set(Keys);
        sideBarTitle.set("COMMAND REMINDERS");
    }
</script>

<Link title="Commands" clickHandler={showKeysReminder}/>

<style>
</style>