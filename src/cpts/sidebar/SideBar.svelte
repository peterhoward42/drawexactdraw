<script>
    import { sideBarComponent } from "./sidebarstore.js";
    import { sideBarTitle } from "./sidebarstore.js";

    const dismiss = () => sideBarComponent.set(null);
</script>

<div class="sidebar q_bg">
    <div class="header">
        <div class="q_heading title">{$sideBarTitle}</div>
        <div class="q_unicode_btn w3-button w3-ripple" on:click={dismiss}>
            &times;
        </div>
    </div>
    <div class="sidebar-cpt">
        <svelte:component this={$sideBarComponent} />
    </div>
</div>

<style>
    .sidebar {
        padding-top: 10px;
        padding-left: 5px;
        padding-right: 5px;
    }
    .header {
        display: flex;
    }
    .title {
        flex-grow: 1;
        align-self: center;
    }
</style>
