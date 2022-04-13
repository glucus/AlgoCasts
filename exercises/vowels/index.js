// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels1(str) {
    const vowelsArr = ['a', 'e', 'i', 'o', 'u'];
    const lowerCaseStr = str.toLowerCase();
    let count = 0;

    for (let character of lowerCaseStr) {
        if (vowelsArr.includes(character)) {
            count++;
        }
    }
    return count;
}

function vowels(str) {
    const vowelsRegex = /[aeiou]/gi
    const result = str.match(vowelsRegex)
    return result?.length || 0;
}

module.exports = vowels;
