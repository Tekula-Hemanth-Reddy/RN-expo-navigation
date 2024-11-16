export function objectToDictionary(array, indexKey) {
    const normalizedObject = {};


    /**
    * If the key is a string, convert it to an array
    * @param  {String|Array} path The path
     * @return {Array}             The path array
     */
    var stringToPath = function (path) {

        // If the path isn't a string, return it
        if (typeof path !== 'string') return path;

        // Create new array
        var output = [];

        // Split to an array with dot notation
        path.split('.').forEach(function (item) {

            // Split to an array with bracket notation
            item.split(/\[([^}]+)\]/g).forEach(function (key) {

                // Push to the new array
                if (key.length > 0) {
                    output.push(key);
                }

            });

        });

        return output;

    };
    // Get the path as an array
    indexKey = stringToPath(indexKey);


    for (let i = 0; i < array.length; i++) {
        var currentKey = array[i];

        // For each item in the key, dig into the object
        for (let i = 0; i < indexKey.length; i++) {

            // If the item isn't found, set current key to undefined
            if (!currentKey[indexKey[i]]) {
                currentKey = undefined;
                break
            };

            // Otherwise, update the current key value
            currentKey = currentKey[indexKey[i]];

        }
        if (currentKey) {
            normalizedObject[currentKey] = array[i];
        } else continue

    }
    return normalizedObject;
}

export function objectToDictionaryArray<T>(array: T[], indexKey: keyof T | (keyof T)[] | string[] | string | ((arg0: T) => string)): { [key: string]: T[] } {
    const normalizedObject: { [key: string]: T[] } = {};


    /**
    * If the key is a string, convert it to an array
    * @param  {String|Array} path The path
     * @return {Array}             The path array
     */
    var stringToPath = function (path) {

        // If the path isn't a string, return it
        if (typeof path !== 'string') return path;

        // Create new array
        var output = [];

        // Split to an array with dot notation
        path.split('.').forEach(function (item) {

            // Split to an array with bracket notation
            item.split(/\[([^}]+)\]/g).forEach(function (key) {

                // Push to the new array
                if (key.length > 0) {
                    output.push(key);
                }

            });

        });

        return output;

    };
    // Get the path as an array
    if (typeof indexKey === 'function') {
    } else {
        indexKey = stringToPath(indexKey);
    }

    const extractIndexFunction = indexKey;

    for (let i = 0; i < array.length; i++) {
        var currentKey = array[i];

        if (typeof extractIndexFunction === 'function') {
            indexKey = extractIndexFunction(array[i]);
            if (!normalizedObject[indexKey.toString()]) {
                normalizedObject[indexKey.toString()] = []
            }
            normalizedObject[indexKey].push(array[i]);
        } else {

            // For each item in the key, dig into the object
            for (let i = 0; i < (indexKey as string[]).length; i++) {

                // If the item isn't found, set current key to undefined
                if (!currentKey[indexKey[i]]) {
                    currentKey = undefined;
                    break
                };

                // Otherwise, update the current key value
                currentKey = currentKey[indexKey[i]];

            }
            if (currentKey) {


                if (!normalizedObject[currentKey.toString()]) {
                    normalizedObject[currentKey.toString()] = []
                }
                normalizedObject[currentKey.toString()].push(array[i])

            } else continue
        }



    }
    return normalizedObject;
}