<script>
	import { onMount, tick } from "svelte";
	import { sideBarComponent } from "./cpts/sidebar/sidebarstore";

	import { interpretMessage } from "./messageInterpreter.js";
	import ToolBar from "./cpts/toolbar/ToolBar.svelte";
	import SideBar from "./cpts/sidebar/SideBar.svelte";
	import ErrorModal from "./cpts/error/ErrorModal.svelte";

	import { makeOnMountHandler } from "./services/makeonmounthandler.js"


	// Put a function into the global namespace, that WASM can call in order
	// to send messages to javascript.
	window.receiveMsgFromWasm = interpretMessage;

	// Register an async function to handle the initialization steps that
	// can only be done after this component is mounted to the DOM.
	let onMountHandler = makeOnMountHandler(sideBarComponent, tick)
	onMount(onMountHandler)

</script>

<div class="page">
	<ToolBar />
	<div class="main-content">
		{#if $sideBarComponent}
			<SideBar />
		{/if}
		<div class="drawingzone" id="drawingzone" />
	</div>
	<div style="background-color:#BBB; height: 75px;" />

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
		background-color: black;
	}
	.drawingzone {
		flex-grow: 1;
		outline: none;
	}
</style>
