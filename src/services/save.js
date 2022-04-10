import { getStorage, ref, uploadString, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { firebaseApp } from "../firebase/store.js"
import { asyncCallWithTimeout } from "./asynctimeout.js"
import { get } from "svelte/store";

import md5 from "md5"

export function handleDrawingSaveMandate(payload) {
    console.log("XXXX ui handling save")

    const saveDetails = JSON.parse(payload)
    const firebaseStorage = getStorage(get(firebaseApp));
    const storageRef = ref(firebaseStorage, makeDrawingPath(saveDetails.userEmail, saveDetails.drawingName));
    const serializedDrawingAsBlob = new Blob([saveDetails.serializedDrawingBase64Enc]);
    const uploadTask = uploadBytesResumable(storageRef, serializedDrawingAsBlob);

    uploadTask.on('state_changed',
        (snapshot) => {
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log('XXXX Upload is ' + progress + '% done');
            switch (snapshot.state) {
                case 'paused':
                    console.log('XXXX Upload is paused');
                    break;
                case 'running':
                    console.log('XXXX Upload is running');
                    break;
            }
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
                    // User canceled the upload
                    console.log('XXXX Errored user-cancelled');
                    break;

                case 'storage/unknown':
                    // Unknown error occurred, inspect error.serverResponse
                    console.log('XXXX Other errored code: ',  error.code)
                    break;
            }
        },
        () => {
            // Upload completed successfully, now we can get the download URL
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                console.log('XXXX Save ok, file available at', downloadURL);
            });
        }
    );

    //const uploadFunction = uploadString(storageRef, saveDetails.serializedDrawingBase64Enc);
    // const saveTimeOut = 1000;
    // const uploadWithTimeout = async () => {
    //     try {
    //         const { okResponse } = await asyncCallWithTimeout(uploadFunction, saveTimeOut);
    //     }
    //     catch (err) {
    //         console.log("XXXX timeout response: ", err);
    //     }
    // }
    // uploadWithTimeout();
}

function makeDrawingPath(email, drawingName) {
    // For the user id part of the path, we use the md5 digest of the
    // user's email address, formatted as hex.
    const emailDigestAsHexString = md5(email)
    const path = ["drawings", emailDigestAsHexString, drawingName].join("/")
    return path
}