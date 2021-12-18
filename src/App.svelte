<script>
	import { interpretMessage } from "./messageInterpreter.js"
	import ToolBar from "./cpts/toolbar/ToolBar.svelte";
	import SideBarLeft from "./cpts/sidebar/SideBar.svelte";

	// Put a function into the global namespace, that WASM can call in order
	// to send messages to javascript.
	window.receiveMsgFromWasm = function(topic, payload) {
		interpretMessage(topic, payload)
	}
</script>

<ToolBar />
<div class="maincontent">
	<div>
		<SideBarLeft />
	</div>
	<div class="drawingzone" id="drawingzone" />
</div>

<div style="background-color:#BBB; height: 75px;" />

<style>
	.maincontent {
		display: flex;
		flex-direction: row;
	}
	.drawingzone {
		height: 400px;
		flex-grow: 1;
	}
</style>
