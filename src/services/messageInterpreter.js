/*
This module is the point of entry for all the messages that the WASM
module sends to the UI.
*/

import { rayLength, rayMode, readout, customAngle } from "../cpts/toolbar/toolbarstore.js";
import { processArrivingAdvice } from '../cpts/advice/controller.js'
import { processUserTransformsMalformed } from '../cpts/paste/pastecontroller.js'
import { bringUpLineStyleMenu, bringUpParaMenu } from '../cpts/properties/menulaunch.js';
import { sideBarComponent } from "../cpts/sidebar/sidebarstore.js"
import { sideBarTitle } from "../cpts/sidebar/sidebarstore.js"
import { drawingInfo } from "../cpts/menu/menustore.js"
import { handleDrawingSaveMandate } from "../services/save.js"
import { currentPage } from "../pages/pagesstore.js"

import Drawing from "../pages/Drawing.svelte"
import SignIn from "../pages/SignIn.svelte"
import Paste from "../cpts/paste/Paste.svelte";

export async function interpretMessage(topic, payload) {

    // Maintain the cases in alphabetical order.
    switch (topic) {
        case "advice":
            processArrivingAdvice(payload);
            break;
        case "app:initializedrawingpage":
            currentPage.set(Drawing)
            break;
        case "app:launchsignin":
            currentPage.set(SignIn)
            break;
        case "customangle":
            customAngle.set(payload)
            break;  
        case "drawinginfo":
            drawingInfo.set(JSON.parse(payload));
            break;
        case "enterpastemode":
            sideBarComponent.set(Paste);
            sideBarTitle.set("PASTE SETTINGS");
            break;
        case "escapejusthappened":
            sideBarComponent.set(null);
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
        case "save":
            handleDrawingSaveMandate(payload);
        case "usertransformmalformed":
            processUserTransformsMalformed(payload)
            break;
    }
}
