<script>
	import HeaderControls from "./cpts/HeaderControls.svelte"
</script>

<div class="app">
	<HeaderControls/>
	<div class="drawingzone" id="drawingzone"/>
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		row-gap: 0px;
		align-items: stretch;
	}

	.drawingzone {
		height: 600px;
		background-color: red;
	}
</style>