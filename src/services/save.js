import { getStorage, ref, uploadString } from "firebase/storage";
import { firebaseApp } from "../firebase/store.js"
import { asyncCallWithTimeout } from "./asynctimeout.js"
import { get } from "svelte/store";

import md5 from "md5"

export function handleDrawingSaveMandate(payload) {
    console.log("XXXX ui handling save")

    const saveDetails = JSON.parse(payload)
    const firebaseStorage = getStorage(get(firebaseApp));
    const storageRef = ref(firebaseStorage, makeDrawingPath(saveDetails.userEmail, saveDetails.drawingName));

    const uploadFunction = uploadString(storageRef, saveDetails.serializedDrawingBase64Enc);
    const saveTimeOut = 1000;
    const uploadWithTimeout = async () => {
        try {
            const { okResponse } = await asyncCallWithTimeout(uploadFunction, saveTimeOut);
        }
        catch (err) {
            console.log("XXXX timeout response: ", err);
        }
    }
    uploadWithTimeout();
}

function makeDrawingPath(email, drawingName) {
    // For the user id part of the path, we use the md5 digest of the
    // user's email address, formatted as hex.
    const emailDigestAsHexString = md5(email)
    const path = ["drawings", emailDigestAsHexString, drawingName].join("/")
    return path
}