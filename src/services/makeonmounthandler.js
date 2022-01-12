
import { alertWASMDrawingAreaChanged } from "./drawingareachanged.js"

// makeOnMountHandler returns a function performs the
// initialization steps that can only be done after the App component has
// been mounted to the DOM.
export function makeOnMountHandler(sideBarComponent, tick) {
    return () => {
        let myInterval = setInterval(async function () {
            if (typeof msgBusPubString == "function") {
                clearInterval(myInterval);
                await tick();
                window.addEventListener("resize", () =>
                    alertWASMDrawingAreaChanged()
                );
                alertWASMDrawingAreaChanged();

                // We need to observe any change to the sideBarComponent so we can
                // alert WASM that the drawing area likely changed size. This includes
                // when the side bar is dismissed.
                // 
                // However we need to wait until after Svelte has updated the
                // layout to include or exclude the side bar before sending
                // the message. Which means we have await Svelte's tick, which
                // means the subscribe handler needs to be async.
                sideBarComponent.subscribe(async value => {
                    await tick();
                    alertWASMDrawingAreaChanged();
                });
            }
        }, 100);
    };
}