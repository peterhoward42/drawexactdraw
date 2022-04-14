import { getDrawingNameIndex } from "../firebase/drawing"

export async function listUsersDrawings() {
    const drawingIndex = await getDrawingNameIndex()
    return drawingIndex.keys()
}