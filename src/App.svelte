<script>
	import { onMount, tick } from "svelte";

	import { sideBarComponent } from "./cpts/sidebar/sidebarstore";
	import { interpretMessage } from "./services/messageInterpreter.js";
	import { makeOnMountHandler } from "./services/makeonmounthandler.js";

	import ToolBar from "./cpts/toolbar/ToolBar.svelte";
	import SideBar from "./cpts/sidebar/SideBar.svelte";
	import ErrorModal from "./cpts/error/ErrorModal.svelte";

	// Put a function into the global namespace, that WASM can call in order
	// to send messages to javascript.
	window.receiveMsgFromWasm = interpretMessage;

	// Register an async function to handle the initialization steps that
	// can only be done after this component is mounted to the DOM.
	onMount(makeOnMountHandler(sideBarComponent, tick));
	
</script>

<div class="page q_bg">
	<ToolBar />
	<div class="main-content">
		{#if $sideBarComponent}
			<SideBar />
		{/if}
		<div class="drawingzone" id="drawingzone" />
	</div>

	<!-- Insert the error Modal into the DOM, (its CSS hides itself) -->
	<ErrorModal />
</div>

<style>
	.page {
		display: flex;
		flex-direction: column;
		height: 100vh;
	}
	.main-content {
		display: flex;
		flex-grow: 1;
	}
	.drawingzone {
		flex-grow: 1;
		outline: none;
	}
</style>
