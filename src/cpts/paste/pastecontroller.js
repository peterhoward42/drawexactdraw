import { transformMalformed } from "./pastestore.js"

export function processUserTransformsMalformed(isMalformed) {
    transformMalformed.set(isMalformed)
 }