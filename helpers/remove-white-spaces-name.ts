export function replaceWhiteSpacesInFileName(fileName: string, character?: string) {
    let char: string = "-"
    if (character) {
        char = character
    }
    fileName = fileName.replace(/\s/g, char)
    return fileName
}