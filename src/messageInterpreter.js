import { tick } from 'svelte';

import { rayLength, rayMode, readout } from "./cpts/toolbar/toolbarstore.js";
import { processArrivingError } from './cpts/error/errorcontroller.js'
import { customAngle } from './cpts/toolbar/toolbarstore.js';

export async function interpretMessage(topic, payload) {

    // Maintain the cases in alphabetical order.
    switch (topic) {
        case "customangle":
            customAngle.set(payload)
            break;
        case "error":
            processArrivingError(payload);
            break;
        case "raylength":
            rayLength.set(payload);
            break;
        case "raymode":
            console.log("XXXX interpreter setting rayMode to: ", payload)
            rayMode.set(payload)
            break;
        case "readout":
            readout.set(payload)
            break;
    }
}
