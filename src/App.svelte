<script>
	import { onMount, tick } from "svelte";

	import { interpretMessage } from "./messageInterpreter.js";
	import ToolBar from "./cpts/toolbar/ToolBar.svelte";
	import SideBar from "./cpts/sidebar/SideBar.svelte";
	import ErrorModal from "./cpts/error/ErrorModal.svelte";

	// Put a function into the global namespace, that WASM can call in order
	// to send messages to javascript.
	window.receiveMsgFromWasm = function (topic, payload) {
		interpretMessage(topic, payload);
	};

	// Once the App is mounted and WASM has exposed is callable functions,
	// AND Svelte has tick()ed, we need to register
	// a window resize handler, and send the inaugral "ui:drawingareachanged"
	// message to WASM.
	onMount(async () => {
		let myInterval = setInterval(async function () {
			if (typeof msgBusPubString == "function") {
				clearInterval(myInterval);
				await tick();
				window.addEventListener("resize", () =>
					msgBusPubString("ui:drawingareachanged", "")
				);
				msgBusPubString("ui:drawingareachanged", "");
			}
		}, 100);
	});
</script>

<div class="page">
	<ToolBar />
	<div class="main-content">
		<SideBar/>
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
	.main-content{
		display: flex;
		flex-grow: 1;
		background-color: black;
	}
	.drawingzone {
		flex-grow: 1;
		outline: none;
	}
</style>
