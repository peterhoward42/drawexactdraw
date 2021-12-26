import { tick } from 'svelte';

import { initialRayLength, readout } from "./cpts/toolbar/toolbarstore.js";
import { error } from "./cpts/toolbar/toolbarstore.js";
import { processChangingRayMode } from './cpts/sidebar/controller.js'
import { processArrivingError } from './cpts/shared/errorcontroller.js'
import { CustomAngle } from './cpts/sidebar/sidebarstore.js';

export async function interpretMessage(topic, payload) {

    // Maintain the cases in alphabetical order.
    switch (topic) {
        case "customangle":
            CustomAngle.set(payload)
            break;
        case "error":
            processArrivingError();
            break;
        case "raylength":
            initialRayLength.set(payload);
            break;
        case "raymode":
            processChangingRayMode(payload)
            break;
        case "readout":
            readout.set(payload)
            break;
    }
}
