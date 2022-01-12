export {bringUpLineStyleMenu}
import { currentLineStyle } from "./propertiesstore"
import { sideBarComponent } from "../sidebar/sidebarstore.js"
import LineStyleMenu from "./LineStyleMenu.svelte"

function bringUpLineStyleMenu(payloadJSON) {
    let payloadObj = JSON.parse(payloadJSON);
    currentLineStyle.set(payloadObj);
    sideBarComponent.set(LineStyleMenu);
}