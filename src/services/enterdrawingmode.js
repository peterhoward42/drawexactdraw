import { currentPage } from "./pages/pagesstore.js"
import Drawing from "../pages/Drawing.svelte"
import { get } from 'svelte/store';

// enterDrawingModeIfNotAlready switches the App to the Drawing page,
// and crucially this intended to be irreversible. I.e. once we load this page
// we don't allow any routes away from it.
//
// This is because the onMount Handler for the drawing page sets up some
// global DOM listeners that are part of the WASM<>javascript interaction,
// and these are not designed to work if its ever done more than once per
// session.
export function enterDrawingModeIfNotAlready() {
    const incumbentPage = get(currentPage)
    if (incumbentPage == Drawing) {
        return
    }
    // The main App listens to this store field to decide what to render as
    // the entire DOM.
    currentPage.set(Drawing)
    // There is quite a bit of initialization to be done the first time
    // we entery Drawing mode - but that is handled by the Drawing component's
    // onMount handler.
}