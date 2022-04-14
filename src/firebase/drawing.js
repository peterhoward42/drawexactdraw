/*
The functions in this module are for saving and retreiving serialized drawings
from Firebase, and the same for the signed-in user's current drawing name.

It knows nothing of drawing serialization, and its functions deal only with
javascript Blob(s).

It owns the storage schema also for these things.
*/

import { uploadBlob } from "./blob.js";
import { firebaseAuth } from "./store.js"
import { get } from 'svelte/store';

// saveDrawing uploads the given drawing blob to Firebase storage,
// on behalf of the signed in user.
// The internal implementation is asynchronous.
export function saveDrawing(drawingName, serializedDrawingAsBlob) {
    const auth = get(firebaseAuth)
    const uid = auth.currentUser.uid;
    const path = assembleDrawingPath(uid, drawingName)
    uploadBlob(path, serializedDrawingAsBlob)
    updateDrawingNameIndex(drawingName)
}

// retreiveDrawing retreives (asynchronously) the drawing of the given name,
// on behalf of the signed in user.
export async function retreiveDrawing(drawingName) {
    const auth = get(firebaseAuth)
    const uid = auth.currentUser.uid;
    const path = assembleDrawingPath(uid, drawingName)
    const blob = await retreiveBlob(path)
    return blob
}

// registerCurrentDrawingName registers the given drawing name
// in Firebase storage as being the signed in user's current drawing.
// The internal implementation is asynchronous.
export function registerCurrentDrawingName(drawingName) {
    const auth = get(firebaseAuth)
    const uid = auth.currentUser.uid;
    const path = assembleCurrentPath(uid, drawingName)
    const blob = new Blob([drawingName])
    uploadBlob(path, blob)
}

// retreiveCurrentDrawingName retreives the drawing name from Firebase,
// that is registered as being the signed-in user's current drawing.
export async function retreiveCurrentDrawingName() {
    const auth = get(firebaseAuth)
    const uid = auth.currentUser.uid;
    const path = assembleCurrentPath(uid, drawingName)
    const blob = await retreiveBlob(path)
    const drawingName = await new Response(blob).text()
    return drawingName
}

// saveDrawingNameIndex uploads the given drawing index (map[string]bool) to Firebase storage,
// on behalf of the signed in user.
async function saveDrawingNameIndex(theIndex) {
    const auth = get(firebaseAuth)
    const uid = auth.currentUser.uid;
    const path = assembleIndexPath(uid)
    const blob = new Blob([theIndex])
    uploadBlob(path, blob)
}

// getDrawingNameIndex retreives the existing drawing name index for the currently
// signed-in user. (A javascript map[string]bool).
async function getDrawingNameIndex() {
    const auth = get(firebaseAuth)
    const uid = auth.currentUser.uid;
    const path = assembleIndexPath(uid)
    const blob = await retreiveBlob(path)
    const drawingIndex = await new Response(blob).json()
    return drawingIndex
}

// updateDrawingNameIndex adds the given drawing name to the signed-in user's
// drawing name index, and saves it to Firebase.
async function updateDrawingNameIndex(newDrawingName) {
    const index = await getDrawingNameIndex()
    index[newDrawingName] = true
    const blob = new Blob([index])
    uploadBlob(path, blob)
}

function assembleDrawingPath(uid, drawingName) {
    return 'user/' + uid  + '/drawings/' + drawingName
}

function assembleCurrentPath(uid) {
    const path = 'user/' + uid + '/currentdrawing'
    return path
}

function assembleIndexPath(uid) {
    const path = 'user/' + uid + '/index'
    return path
}