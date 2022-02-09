import { selectionsAdvice } from "./selectionsadvicestore.js";

// Bring up the selections advice modal to display the
// selections advice.
export function processArrivingSelectionsAdvice(incomingAdvice) {
   selectionsAdvice.set(JSON.parse(incomingAdvice));
   document.getElementById('selectionAdviceModal').style.display='block';
}
