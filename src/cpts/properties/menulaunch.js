export {bringUpLineStyleMenu}
import { currentLineStyle } from "./propertiesstore"
import { sideBarComponent } from "../sidebar/sidebarstore.js"
import { sideBarTitle } from "../sidebar/sidebarstore.js"
import LineStyleMenu from "./LineStyleMenu.svelte"

function bringUpLineStyleMenu(payloadJSON) {
    // Update the stored current line style accordingly.
    let payloadObj = JSON.parse(payloadJSON);
    currentLineStyle.set(payloadObj);

    // And update the store's sideBarComponent to be the linestyle menu.
    // That will cause the sideBarComponent to appear, and render the menu.
    sideBarComponent.set(LineStyleMenu);
    sideBarTitle.set("Line Style");
}