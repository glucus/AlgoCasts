// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

const createStringMap = (str) => {
    let strMap = {};
    const arr = str.split('');
    arr.forEach((elem) => {
        if (!strMap[elem]) {
            strMap[elem] = 1;
        } else {
            strMap[elem]++;
        }
    })
    return strMap;
}

function anagrams1(stringA, stringB) {
    const notCharacters = /\W/g

    const format = (str) => str.toLowerCase().replace(notCharacters, '');
    const formattedStringA = format(stringA);
    const formattedStringB = format(stringB);

    if (formattedStringA.length !== formattedStringB.length) {
        return false;
    } else {
        const stringMapA = createStringMap(formattedStringA);
        const stringMapB = createStringMap(formattedStringB);

        for (let prop in stringMapA) {
            if (stringMapB[prop] !== stringMapA[prop]) return false
        }
        return true;
    }
}

const anagrams = (stringA, stringB) => {
    const formatString = (str) => str.toLowerCase().replace(/\W/g, '');
    const sortString = (str) => str.split('').sort().join('');

    const sortedStringA = sortString(formatString(stringA));
    const sortedStringB = sortString(formatString(stringB));

    return sortedStringA === sortedStringB;
}

module.exports = anagrams;
