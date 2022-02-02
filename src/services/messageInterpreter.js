import { tick } from 'svelte';

import Paste from "../cpts/paste/Paste.svelte";

import { rayLength, rayMode, readout, customAngle } from "../cpts/toolbar/toolbarstore.js";
import { processArrivingError } from '../cpts/error/errorcontroller.js'
import { processUserTransformsMalformed } from '../cpts/paste/pastecontroller.js'
import { bringUpLineStyleMenu, bringUpParaMenu } from '../cpts/properties/menulaunch.js';
import { sideBarComponent } from "../cpts/sidebar/sidebarstore.js"
import { sideBarTitle } from "../cpts/sidebar/sidebarstore.js"

export async function interpretMessage(topic, payload) {

    // Maintain the cases in alphabetical order.
    switch (topic) {
        case "customangle":
            customAngle.set(payload)
            break;
        case "enterpastemode":
            sideBarComponent.set(Paste);
            sideBarTitle.set("PASTE SETTINGS");
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
        case "usertransformmalformed":
            processUserTransformsMalformed(payload)
            break;
    }
}
