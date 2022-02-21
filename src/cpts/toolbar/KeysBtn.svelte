<script>
    import Keys from "../keys/Keys.svelte"
    import {sideBarComponent, sideBarTitle} from "../sidebar/sidebarstore"
    
    function showKeysReminder() {
        sideBarComponent.set(Keys);
        sideBarTitle.set("COMMAND REMINDERS");
    }
</script>

<div class="keys q_txt" on:click={showKeysReminder}>
    Commands...
</div>

<style>
    .keys:hover {
        text-decoration: underline;
    }
    .keys:active {
        color: #222;
    }
</style>