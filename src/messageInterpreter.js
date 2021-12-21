import { tick } from 'svelte';

import { initialRayLength } from "./cpts/toolbar/toolbarstore.js";
import { error } from "./cpts/errorstore.js";

export async function interpretMessage(topic, payload) {
    switch (topic) {
        case "raylength":
            initialRayLength.set(payload);
            break;

        case "error":
            error.set(payload);
            // Setting the error will cause it to be displayed, which,
            // we know potentially shifts the drawing area.
            // So we wait for Svelte to update layout (tick) then alert 
            // WASM that the drawing area likely changed.
            await tick();
            msgBusPubString("ui:drawingareachanged", null)
            break;
    }
}
