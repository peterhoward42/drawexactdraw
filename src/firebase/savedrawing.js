import { uploadBlob } from "./uploadblob.js";
import { setCurrentDrawing } from "./setcurrentdwg";
import { firebaseAuth } from "./store.js"
import { get } from 'svelte/store';

// saveDrawing (asyncrounously) uploads the given drawing
// to Firebase storage for the signed in user, *AND* marks it as the
// user's current drawing.
export function saveDrawing(drawingName, serializedDrawingAsBlob) {
    const auth = get(firebaseAuth)
    const uid = auth.currentUser.uid;
    const path = 'user/' + uid  + '/drawings/' + drawingName
    uploadBlob(path, serializedDrawingAsBlob)
    setCurrentDrawing(drawingName)
}