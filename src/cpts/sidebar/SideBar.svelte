<script>
    import { sideBarComponent } from "./sidebarstore.js";
    import { sideBarTitle } from "./sidebarstore.js";
    import DismissButton from "../common/DismissBtn.svelte";

    const dismiss = () => sideBarComponent.set(null);
</script>

<div class="sidebar">
    <div class="header">
        <div class="q_heading title">{$sideBarTitle}</div>
        <DismissButton clickHandler={dismiss} />
    </div>
    <div class="sidebar-cpt">
        <svelte:component this={$sideBarComponent} />
    </div>
</div>

<style>
    .sidebar {
        margin-top: 30px;
        padding-left: 5px;
        padding-right: 5px;
    }
    .header {
        display: flex;
        margin-bottom: 10px;
        gap: 30px;
    }
    .title {
        flex-grow: 1;
        align-self: center;
    }
</style>
