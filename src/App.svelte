<script>
	import { onMount, tick } from "svelte";

	import { interpretMessage } from "./messageInterpreter.js";
	import ToolBar from "./cpts/toolbar/ToolBar.svelte";
	import SideBarLeft from "./cpts/sidebar/SideBar.svelte";

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
		let myInterval = setInterval(async function() {
			if (typeof msgBusPubString == 'function') {
				clearInterval(myInterval);
				await tick();
				window.addEventListener("resize", () => msgBusPubString("ui:drawingareachanged", ""));
				msgBusPubString("ui:drawingareachanged", "")
			}			
		}, 100)
	});

</script>

<style>
	.leftbar {
		background-color: red;
		flex-basis: 100px;
	}
	.maincontent {
		display: flex;
		flex-direction: row;
	}
	.drawingzone {
		height: 400px;
		flex-grow: 1;
	}
</style>

<div class="page">
	<ToolBar />
	<div class="maincontent">
		<div class="leftbar">
			<SideBarLeft />
		</div>
		<div class="drawingzone" id="drawingzone" />
	</div>
	<div style="background-color:#BBB; height: 75px;" />
</div>
