import { errorMessage } from "./errorstore.js";


// Show the incoming error in the error modal component.
export function processArrivingError(incomingError) {
   errorMessage.set(incomingError)
   document.getElementById('errormodalcpt').style.display='block'
}
