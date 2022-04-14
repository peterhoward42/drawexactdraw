import { uploadBlob } from "./uploadblob.js";
import { firebaseAuth } from "./store.js"
import { get } from 'svelte/store';

// saveDrawing (asyncrounously) uploads the given drawing
// to Firebase storage for the signed in user,
export function saveDrawing(drawingName, serializedDrawingAsBlob) {
    const auth = get(firebaseAuth)
    const uid = auth.currentUser.uid;
    const path = 'user/' + uid  + '/drawings/' + drawingName
    uploadBlob(path, serializedDrawingAsBlob)
}