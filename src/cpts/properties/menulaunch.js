export {bringUpLineStyleMenu}
import { lineStyle } from "./propertiesstore"
import { sideBarComponent } from "../sidebar/sidebarstore.js"
import LineStyleMenu from "./LineStyleMenu.svelte"

function bringUpLineStyleMenu(payload) {
    lineStyle.set(payload)
    sideBarComponent.set(LineStyleMenu)
}