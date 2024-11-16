/***
 * Replaces the current string by removing white spaces
 */
export const removeWhitespaces = (str: string) => {
    return str.replace(/\s+/g, '');
}

export function formatString(path: string, ...val: string[]) {
    // const steps = path.split('.');
    // let locString = steps.reduce((inner, current) => {
    //     return inner[current];
    // }, strings);
    for (let index = 0; index < val.length; index++) {
        path = path.replace(new RegExp('\\{' + `${index}` + '\\}', 'g'), val[index] || '');
    }
    return path;
}
