import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

// We access the firebase app from a shared store.
import { firebaseApp } from "../firebase/store.js"
import { get } from "svelte/store";

import md5 from "md5"


const timeoutInMilliseconds = 1000;

// saveSerializedDrawing extracts the drawing name, and the serialized
// drawing bytes from the given payload and uses Firebase Cloud Storage (bucket),
// to save it.
export function saveSerializedDrawing(payload) {
    console.log("XXXX ui handling save")

    const saveDetails = JSON.parse(payload)
    const firebaseStorage = getStorage(get(firebaseApp));
    // The bucket storage path is composed from the user's email and drawing name.
    const storageRef = ref(firebaseStorage, makeDrawingPath(saveDetails.userEmail, saveDetails.drawingName));

    const serializedDrawingAsBlob = new Blob([saveDetails.serializedDrawingBase64Enc]);

    // Launch the upload asynchronously.
    const uploadTask = uploadBytesResumable(storageRef, serializedDrawingAsBlob);

    // The Firebase service responds to errors by retrying (internally), but
    // for our use case we prefer to reveal an error and stop after a short timeout.
    let uploadComplete = false
    setTimeout(() => {
        console.log("XXXX timeout fired");
        if (!uploadComplete) {
            console.log("XXXX upload not complete - so killing it")
            uploadTask.cancel(); // Todo: emit error info here.
        }
    }, timeoutInMilliseconds)

    // Observe the progress of the upload...
    uploadTask.on('state_changed',
        (snapshot) => {
            // Can measure paused/resumed/bytes-transferred here.
        },
        (error) => {
            // A full list of error codes is available at
            // https://firebase.google.com/docs/storage/web/handle-errors
            switch (error.code) {
                case 'storage/unauthorized':
                    // User doesn't have permission to access the object
                    console.log('XXXX Errored unauthorized');
                    break;
                case 'storage/canceled':
                    // Our save timeout fired.
                    console.log('XXXX Catching timeout fired');
                    break;

                case 'storage/unknown':
                    // Unknown error occurred, inspect error.serverResponse
                    console.log('XXXX Other errored code: ', error.code)
                    break;
            }
        },
        () => {
            // Upload completed successfully, now we could get the download URL
            uploadComplete = true;
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                console.log('XXXX Save ok, file available at', downloadURL);
            });
        }
    );
}

// makeDrawingPath composes an address of this form: <hashedEmail/drawings/<name of drawing>
function makeDrawingPath(email, drawingName) {
    // For the user id part of the path, we use the md5 digest of the
    // user's email address, formatted as hex.
    const emailDigestAsHexString = md5(email)
    const path = ["drawings", emailDigestAsHexString, drawingName].join("/")
    return path
}