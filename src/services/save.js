import { getStorage, ref } from "firebase/storage";
import { firebaseApp } from "../firebase/store.js"
import { get } from "svelte/store";

import md5 from "md5"

export function processSave(payload) {
    console.log("XXXX ui handling save")

    let saveDetails
    saveDetails = JSON.parse(payload)
    console.log("XXXX saveDetails: ", saveDetails)

    const storage = getStorage(get(firebaseApp));
    console.log("XXXX storage object: ", storage)

    const drawingPath = makeDrawingPath(saveDetails.userEmail, saveDetails.drawingName)
    console.log("XXXX drawingPath: ", drawingPath)
    const storageRef = ref(storage, drawingPath);

    const dwg = saveDetails.serializedDrawingBase64Enc;
    console.log("XXXX len of dwg: ", dwg.length);
    console.log("XXXX dwg is: ", dwg);
    const drawingBlob = new Blob([saveDetails.serializedDrawingBase64Enc]);
    console.log("XXXX blob is: ", drawingBlob);

    // make a file from the serialized drawing
    // uploadBytes(storageRef, file).then((snapshot) => {
    //     console.log('Uploaded a blob or file!');
    //   });
}

function makeDrawingPath(email, drawingName) {
    // For the user id part of the path, we use the md5 digest of the
    // user's email address, formatted as hex.
    const emailDigestAsHexString = md5(email)
    const path = ["drawings", emailDigestAsHexString, drawingName].join("/")
    return path
}