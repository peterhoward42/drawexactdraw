<script>
    import Keys from "../keys/Keys.svelte"
    import {sideBarComponent, sideBarTitle} from "../sidebar/sidebarstore"
    
    function showKeysReminder() {
        sideBarComponent.set(Keys);
        sideBarTitle.set("Command Reminders");
    }
</script>

<div class="keys q_txt" on:click={showKeysReminder}>
    Keys...
</div>


<style>
    .keys:hover {
        text-decoration: underline;
    }
    .keys:active {
        color: #222;
    }
</style>