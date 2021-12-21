import { tick } from 'svelte';

import { initialRayLength, readout } from "./cpts/toolbar/toolbarstore.js";
import { error } from "./cpts/errorstore.js";

export async function interpretMessage(topic, payload) {
    // Maintain the cases in alphabetical order.
    switch (topic) {
        case "error":
            error.set(payload);
            // Setting the error will cause it to be displayed, which,
            // we know potentially shifts the drawing area.
            // So we wait for Svelte to update layout (tick) then alert 
            // WASM that the drawing area likely changed.
            await tick();
            msgBusPubString("ui:drawingareachanged", null)
            break;
        case "raylength":
            initialRayLength.set(payload);
            break;
        case "readout":
            readout.set(payload)
            break;
    }
}
