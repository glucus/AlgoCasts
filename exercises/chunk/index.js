// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk1(array, size) {
    let result = [];

    for (let i = 0; i < array.length; i + size) {
        // array.splice(start[, deleteCount[, item1[, item2[, ...]]]])
        const chunk = array.splice(i, size);
        result.push(chunk);
    }
    return result;
}

function chunk(array, size) {
    let result = [];
    let chunk = [];

    array.forEach((elem, index) => {
        if (chunk.length < size) {
            chunk.push(elem);

            if (chunk.length === size || index === array.length - 1) {
                result.push(chunk);
                chunk = [];
            }
        }
    });

    return result;
}

module.exports = chunk;
