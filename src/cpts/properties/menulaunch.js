export {bringUpLineStyleMenu}
import { currentLineStyleJson } from "./propertiesstore"
import { sideBarComponent } from "../sidebar/sidebarstore.js"
import LineStyleMenu from "./LineStyleMenu.svelte"

function bringUpLineStyleMenu(payload) {
    currentLineStyleJson.set(payload)
    sideBarComponent.set(LineStyleMenu)
}