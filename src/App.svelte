<script>
	import { interpretMessage } from "./messageInterpreter.js";
	import ToolBar from "./cpts/toolbar/ToolBar.svelte";
	import SideBarLeft from "./cpts/sidebar/SideBar.svelte";
	import Error from "./cpts/Error.svelte";

	// Put a function into the global namespace, that WASM can call in order
	// to send messages to javascript.
	window.receiveMsgFromWasm = function (topic, payload) {
		interpretMessage(topic, payload);
	};

	// Tell WASM whenever that the drawingzone DIV may have changed in size and
	// or position, when the window changes size.
	window.addEventListener('resize', () => msgBusPubString("ui:drawingareachanged", null));

</script>

<div class="page">
	<ToolBar />
	<Error />
	<div class="maincontent">
		<div class="leftbar">
			<SideBarLeft />
		</div>
		<div class="drawingzone" id="drawingzone" />
	</div>
	<div style="background-color:#BBB; height: 75px;" />
</div>

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
