import { advice } from "./advicestore.js";

// Bring up the selections advice modal to display the
// selections advice.
export function processArrivingAdvice(incomingAdvice) {
   advice.set(JSON.parse(incomingAdvice));
   document.getElementById('advice-modal').style.display='block';
}
