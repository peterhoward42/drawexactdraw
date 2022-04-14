import { getDrawingNameIndex } from "../firebase/drawing"

// listUsersDrawings provides a list of the signed-in user's
// existing drawings.
export async function listUsersDrawings() {
    const drawingIndex = await getDrawingNameIndex()
    return drawingIndex.keys()
}

// thisDrawingNameAlreadyExists returns true if the signed-in user already
// has a drawing of the given name.
export async function thisDrawingNameAlreadyExists(aDrawingName) {
    const listOfDrawings = await listUsersDrawings()
    return listOfDrawings.includes(aDrawingName)
}