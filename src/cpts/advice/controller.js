import { advice } from "./advicestore.js";

// Bring up the selections advice modal to display the
// selections advice.
export function processArrivingAdvice(incomingAdvice) {
   console.log("XXXX setting advice in store\n")
   advice.set(JSON.parse(incomingAdvice));
   document.getElementById('advice-modal').style.display='block';
}
