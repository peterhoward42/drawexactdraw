import { saveDrawing, registerCurrentDrawingName, retreiveCurrentDrawingName } from "../firebase/drawing";

// saveSerializedDrawing extracts the drawing name, and the serialized
// drawing bytes from the given payload and uses Firebase Cloud Storage (bucket),
// to save it.  *AND* marks it as the user's current drawing.
export function saveSerializedDrawing(payload) {
    console.log("XXXX ui handling saveSerializedDrawing")
    const saveDetails = JSON.parse(payload)
    const serializedDrawingAsBlob = new Blob([saveDetails.serializedDrawingBase64Enc]);
    saveDrawing(saveDetails.drawingName, serializedDrawingAsBlob)
    registerCurrentDrawingName(saveDetails.drawingName)
}

// retreiveCurrentDrawing fetches the signed-in user's current drawing from
// Firebase - in the form of its serialized base64 encoding form string. I.e.
// it is the inverse function to saveSerializedDrawing() above.
export async function retreiveCurrentDrawing() {
    console.log("XXXX ui handling retreiveCurrentDrawing")
    const drawingName = await retreiveCurrentDrawingName()
    const theBlob = await retreiveDrawing(drawingName)
    const response = new Request(theBlob)
    const serializedDrawingBase64Enc = await response.text()
    return {
        "drawingName": drawingName,
        "serializedDrawingBase64Enc": serializedDrawingBase64Enc,
    }
}