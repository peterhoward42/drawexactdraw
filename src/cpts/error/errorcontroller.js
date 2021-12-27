import { errorMessage } from "./errorstore.js";


// We show or hide the CustomAngle component depending on the ray mode.
export function processArrivingError(incomingError) {
   errorMessage.set(incomingError)
   document.getElementById('errormodalcpt').style.display='block'
}
