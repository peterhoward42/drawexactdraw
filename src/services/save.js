import { saveDrawing } from "../firebase/savedrawing";
import { setCurrentDrawing } from "../firebase/setcurrentdwg";

// saveSerializedDrawing extracts the drawing name, and the serialized
// drawing bytes from the given payload and uses Firebase Cloud Storage (bucket),
// to save it.  *AND* marks it as the user's current drawing.
export function saveSerializedDrawing(payload) {
    console.log("XXXX ui handling save")
    const saveDetails = JSON.parse(payload)
    const serializedDrawingAsBlob = new Blob([saveDetails.serializedDrawingBase64Enc]);
    saveDrawing(saveDetails.drawingName, serializedDrawingAsBlob)
    setCurrentDrawing(drawingName)
}