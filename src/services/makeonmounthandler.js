import { alertWASMDrawingAreaChanged } from "./drawingareachanged.js"

// makeOnMountHandlerForEntireApp returns a function that can be called later to do the
// initialization steps for the whole App, that can only be done after the App component has
// been mounted to the DOM.
// 
// You have to pass in a reference to the side bar Svelte component, and
// Svelte's tick function.
export function makeOnMountHandlerForEntireApp(sideBarComponent, tick) {
    return () => {
        // We have to wait until WASM has exported the messaging function
        // we need to communicate with it.
        let myInterval = setInterval(async function () {
            if (typeof msgBusPubString == "function") {
                clearInterval(myInterval);
                // Alert WASM whenever the window changes size,
                // and right now.
                window.addEventListener("resize", () =>
                    alertWASMDrawingAreaChanged()
                );
                alertWASMDrawingAreaChanged();

                // Tell WASM the drawing area likely changed whenever
                // sideBarComponent switches to a different one (or null).
                //
                // We have no need to unsubscribe because the App does not
                // get created or unmounted multiple times.
                const unsubscriber = sideBarComponent.subscribe(alertWASM(tick))
            }
        }, 100);
    };
}

// alertWASM takes responsibility for sending a message to WASM, but only after
// waiting for some ongoing layout changes in Svelte to finish.
function alertWASM(tick) {
    return async value => {
        await tick(); // Await the side bar layout change.
        alertWASMDrawingAreaChanged();
    };
}