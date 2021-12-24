import { sideBarComponents } from './sidebarstore'
import CustomAngle from './CustomAngle.svelte'

// We show or hide the CustomAngle component depending on the ray mode.
export function processChangingRayMode(rayMode) {
    if (rayMode == "customangle") {
        sideBarComponents.update(contents => [...contents, CustomAngle])
    } else {
        sideBarComponents.update(contents => contents.filter(item => item != CustomAngle));
    }
}