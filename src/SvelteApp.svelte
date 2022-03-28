<script>
	import page from "page";

    import { interpretMessage } from "./services/messageInterpreter.js";
	import { currentPage } from "./pages/pagesstore.js"

	import SignIn from "./pages/SignIn.svelte";
	import Drawing from "./pages/Drawing.svelte";
	import TermsOfService from "./pages/TermsOfService.svelte";
	import Home from "./pages/Home.svelte";


    // To support the new session, we put a function into the global namespace,
    // that WASM can call in order to send messages to javascript.
    window.receiveMsgFromWasm = interpretMessage;

	// Specify routes and start the Router
	page("/", () => $currentPage = SignIn)
	page("/home", () => $currentPage = Home)
	page("/drawing", () => $currentPage = Drawing)
	page("/tos", () => $currentPage = TermsOfService)

	page();

</script>

<svelte:component this={$currentPage} />
