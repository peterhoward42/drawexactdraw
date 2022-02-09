export { bringUpLineStyleMenu, bringUpParaMenu }
import LineStyleMenu from "./LineStyleMenu.svelte"
import ParaMenu from "./ParaMenu.svelte"

import { currentLineStyle } from "./propertiesstore"
import { currentPara } from "./propertiesstore"
import { sideBarComponent } from "../sidebar/sidebarstore.js"
import { sideBarTitle } from "../sidebar/sidebarstore.js"


function bringUpLineStyleMenu(payloadJSON) {
    // Update the stored current line style accordingly.
    let payloadObj = JSON.parse(payloadJSON);
    currentLineStyle.set(payloadObj);

    // And update the store's sideBarComponent to be the linestyle menu.
    // That will cause the sideBarComponent to appear, and render the menu.
    sideBarComponent.set(LineStyleMenu);
    sideBarTitle.set("LINE STYLE");
}

function bringUpParaMenu(payloadJSON) {
    // Update the stored current paragraph properties accordingly.
    let payloadObj = JSON.parse(payloadJSON);
    currentPara.set(payloadObj);

    // And update the store's sideBarComponent to be the paragraph menu.
    // That will cause the sideBarComponent to appear, and render the menu.
    sideBarComponent.set(ParaMenu);
    sideBarTitle.set("TEXT PROPERTIES");
}