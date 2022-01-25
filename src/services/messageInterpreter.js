import { tick } from 'svelte';

import { rayLength, rayMode, readout, customAngle } from "../cpts/toolbar/toolbarstore.js";
import { processArrivingError } from '../cpts/error/errorcontroller.js'
import { bringUpLineStyleMenu, bringUpParaMenu } from '../cpts/properties/menulaunch.js';

export async function interpretMessage(topic, payload) {

    // Maintain the cases in alphabetical order.
    switch (topic) {
        case "customangle":
            customAngle.set(payload)
            break;
        case "error":
            processArrivingError(payload);
            break;
        case "linestyle":
            bringUpLineStyleMenu(payload);
            break;
        case "parastyle":
            bringUpParaMenu(payload);
            break;
        case "raylength":
            rayLength.set(payload);
            break;
        case "raymode":
            rayMode.set(payload)
            break;
        case "readout":
            readout.set(JSON.parse(payload))
            break;
    }
}
