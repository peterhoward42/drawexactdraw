import { uploadBlob } from "./uploadblob.js";
import { firebaseAuth } from "./store.js"
import { get } from 'svelte/store';

// setCurrentDrawing (asyncrounously) registers the given drawing name
// in Firebase storage as being the signed in user's current drawing.
export function setCurrentDrawing(drawingName) {
    const auth = get(firebaseAuth)
    const uid = auth.currentUser.uid;
    const path = 'user/' + uid  + '/currentdrawing/'
    const blob = new Blob([drawingName])
    uploadBlob(path, blob)
}