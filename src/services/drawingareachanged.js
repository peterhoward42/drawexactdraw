// A DRY helper. It tells the WASM that the drawing zone
// DIV may have moved or changed size, or both.
export function alertWASMDrawingAreaChanged() {
    msgBusPubString("ui:drawingareachanged", "");
}
