import { tick } from 'svelte';

import { rayLength, readout } from "./cpts/toolbar/toolbarstore.js";
import { processChangingRayMode } from './cpts/sidebar/controller.js'
import { processArrivingError } from './cpts/error/errorcontroller.js'
import { CustomAngle } from './cpts/toolbar/toolbarstore.js';

export async function interpretMessage(topic, payload) {

    // Maintain the cases in alphabetical order.
    switch (topic) {
        case "customangle":
            CustomAngle.set(payload)
            break;
        case "error":
            processArrivingError(payload);
            break;
        case "raylength":
            rayLength.set(payload);
            break;
        case "raymode":
            processChangingRayMode(payload)
            break;
        case "readout":
            readout.set(payload)
            break;
    }
}
