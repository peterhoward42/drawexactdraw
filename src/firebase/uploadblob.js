import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { firebaseStorage } from "./store.js"
import { get } from 'svelte/store';

// uploadBlob uploads the given blob to Firebase Storage on behalf of the 
// signed-in user, at the given path.
// It is asynchronous.
export function uploadBlob(path, blob) {
    const storage = get(firebaseStorage)
    const storageRef = ref(storage, path);
    const uploadTask = uploadBytesResumable(storageRef, blob); // Async.
    // The Firebase service responds to errors by retrying (internally), but
    // for our use case we prefer to reveal an error and stop after a short timeout.
    let uploadComplete = false
    const timeoutInMilliseconds = 1000;
    setTimeout(() => {
        console.log("XXXX uploadBlob() timeout fired");
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