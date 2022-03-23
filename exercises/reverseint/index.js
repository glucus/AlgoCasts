// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt1(n) {
    const reverse = (str) => str.split('').reverse().join('');

    if (n < 0) {
        const str = (-n).toString();
        const reversedStr = reverse(str);
        return -Number(reversedStr);
    }
    const str = n.toString();
    const reversedStr = reverse(str);
    return Number(reversedStr);
}

function reverseInt2(n) {
    const reversedStr = n.toString().split('').reverse().join('');
    return (n < 0) ? -parseInt(reversedStr) : parseInt(reversedStr);
}

function reverseInt(n) {
    const reversedStr = n.toString().split('').reverse().join('');
    return Math.sign(n) * parseInt(reversedStr);
}

module.exports = reverseInt;
