// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps1(n) {
    for (let i = 1; i < n + 1; i++) {
        const pounds = Array(i).fill('#').join('');
        const spaces = Array(n - i).fill(' ').join('');
        const result = pounds + spaces;
        console.log(result);
    }
}

// solution with matrix
function steps2(n) {
    for (let i = 0; i < n; i++) {
        let result = '';

        for (let j = 0; j < n; j++) {
            if (j > i) {
                result += ' ';
            } else {
                result += '#'
            }
        }
        console.log(result);
    }
}

function steps3(n, row = 0) {
    if (row === n) {
        return;
    }
    let str = '';
    while (str.length < n) {
        if (str.length <= row) {
            str = str + '#';
        } else str = str + ' ';
    }
    console.log(str);
    steps(n, row + 1);
}

function steps(n, row = 0, str = '') {
    if (row === n) {
        return;
    }
    if (str.length === n) {
        console.log(str);
        steps(n, row + 1, '');
    } else {
        const characterToAdd = (str.length <= row) ? '#': ' ';
        steps(n, row, str + characterToAdd);
    }
}

module.exports = steps;
