<script>
	import router from "page";

	import { currentPage } from "./pages/pagesstore"

	import SignIn from "./pages/SignIn.svelte";
	import Drawing from "./pages/Drawing.svelte";

	// Specify routes and start the Router
	router("/", () => $currentPage = SignIn)
	router("/drawing", () => $currentPage = Drawing)

	router.start();

</script>

<svelte:component this={$currentPage} />
