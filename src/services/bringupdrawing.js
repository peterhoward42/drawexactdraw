import { retreiveCurrentDrawing } from "./drawingio"

// switchToDrawingModeAndBringUpUsersCurrentDrawing is a DRY helper that first
// makes sure the web app has switched to the drawing page, fetches the signed-in
// user's current drawing, and sends a message to WASM telling it to load it.
export function switchToDrawingModeAndBringUpUsersCurrentDrawing() {
    enterDrawingModeIfNotAlready()
    retreiveCurrentDrawing.then(
        (drawingData) => {
            msgBusPubString("ui:loadthisdrawing", drawingData.serializedDrawingBase64Enc);
        },
        (error) => {
            console.log("XXXX retreiveCurrentDrawing() error: ", error)
        },
    )
}