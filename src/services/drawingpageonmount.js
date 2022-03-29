import { tick } from "svelte";

// doOnMountOpsForDrawingPage is in charge of the initialisation that must be
// done for the Drawing page, when it has been mounted.
export async function doOnMountOpsForDrawingPage(sideBarComponent) {
    if (hasBeenCalled) {
        throw Error("You must not call doOnMountOpsForDrawingPage more than once");
    }
    hasBeenCalled = true

    // We wait for one Svelte tick before we do the rest to make sure the
    // page layout is stable.
    await tick();

    // The following are the mechanisms required to keep the WASM module
    // abreast of changing drawing zone div geometry.
    window.addEventListener("resize", () => alertWASMDrawingAreaChanged());
    sideBarComponent.subscribe(alertWASM())
    alertWASMDrawingAreaChanged();

    // Tell the WASM module that the drawing page is now ready.
    msgBusPubString("ui:drawingpageisready", null)
};

// alertWASM calls alertWASMDrawingAreaChanged(), but waits for one svelte
// tick before doing so, to make sure svelte's layout is complete.
function alertWASM() {
    return async value => {
        await tick(); // Await the side bar layout change.
        alertWASMDrawingAreaChanged();
    };
}

// A DRY helper. It tells the WASM that the drawing zone
// DIV may have moved or changed size, or both.
export function alertWASMDrawingAreaChanged() {
    msgBusPubString("ui:drawingareachanged", "");
}

// This variable supports the single-call check.
var hasBeenCalled = false

