// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    const strMap = {};

    for (let char of str) {
        // strMap[char] = strMap[char] ? strMap[char] + 1 : 1;

        if (strMap[char]) {
            strMap[char] = strMap[char] + 1;
        } else {
            strMap[char] = 1;
        }
    }

    let maxValue = 0;
    let maxProp;

    for (let prop in strMap) {
        if (strMap[prop] > maxValue) {
            maxValue = strMap[prop];
            maxProp = prop;
        }
    }
    return maxProp;
}

module.exports = maxChar;
