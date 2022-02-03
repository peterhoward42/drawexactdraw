import { transformMalformed } from "./pastestore.js"

export function processUserTransformsMalformed(isMalformed) {
    console.log("XXXX arrived processUserTransformsMalformed() with: ", isMalformed)
    transformMalformed.set(isMalformed)
 }