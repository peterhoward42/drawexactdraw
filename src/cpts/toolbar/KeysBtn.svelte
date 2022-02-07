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
    .keys {
        padding: 2px 5px 1px 5px;
        border: 1px solid #222;
        border-radius: 5px;

    }
    .keys:hover {
        color: #555;
        border: 1px solid #555;

    }
    .keys:active {
        color: #222;
        border: 1px solid #222;
    }
</style>