<script>
	import page  from "page";

	import { currentPage } from "./pages/pagesstore.js"

	import SignIn from "./pages/SignIn.svelte";
	import Drawing from "./pages/Drawing.svelte";
	import TermsOfService from "./pages/TermsOfService.svelte";
	import Home from "./pages/Home.svelte";
	import Authorized from "./pages/Authorized.svelte";

	// Specify routes and start the Router
	page("/", () => $currentPage = SignIn)
	page("/home", () => $currentPage = Home)
	page("/drawing", () => $currentPage = Drawing)
	page("/tos", () => $currentPage = TermsOfService)

	page();

</script>

<svelte:component this={$currentPage} />
