// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome1(str) {
    const reversedStr = str.split('').reverse().join('');
    return (str === reversedStr);
}

function palindrome2(str) {
    for (let i = 0; i < str.length / 2; i++) {
        if (str[i] !== str[str.length - i - 1]) {
            return false;
        }
    }
    return true;
}

const palindrome = (str) => {
   return str.split('').every((element, i) => element === str[str.length - 1 - i]);
}

module.exports = palindrome;
