<script>
    import { interpretMessage } from "./services/messageInterpreter.js";
	import { currentPage } from "./pages/pagesstore.js"

	import Home from "./pages/Home.svelte";

    // To support the new session, we put a function into the global namespace,
    // that WASM can call in order to send messages to javascript.
    window.receiveMsgFromWasm = interpretMessage;

	// Universal entry point is to show the sign-in component.
	$currentPage = Home

</script>

<!-- The rendering for the SvelteApp is simply to render the component
specified in the store. -->
<svelte:component this={$currentPage} />
