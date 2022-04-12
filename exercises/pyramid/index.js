// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1) / 1
//       '#'
//   pyramid(2) // 3 length
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####' // 5 length
//   pyramid(4)
//      '   #   '
//      '  ###  '
//      ' ##### '
//      '#######' // 7 length

//   pyramid(5)
//     '    #    '
//     '   ###   '
//     '  #####  '  // 5
//     ' ####### ' // 7 pounds  -> number of pounds for a row === length of str for a pyramid(row) which
//     '#########' // 9 length

// ax + b = c;

// 2n - 1

// length grows by 2 for each row

//  row length is (2n - 1), in the center there is always a pound
//  and before and after it there are (n) symbols of which (n - row) is spaces and (row) punds

function pyramid1(n) {
    for (let i = 0; i < n; i++) {
        const spaces = new Array(n - 1 - i).fill(' ').join('');
        const pounds = new Array(i).fill('#').join('');
        const str = spaces + pounds + '#' + pounds + spaces;
        console.log(str);
    }
}

// (2n - 1) - (n - row) = n -1 + row
// (n - row) spaces (row #) (n - row ) spaces

const pyramid2 = (n) => {
    for (let row = 0; row < n; row++) {
        let str = '';
        for (let i = 0; i < 2 * n - 1; i++) {
            if (str.length < n - row - 1) {
                str += ' ';
            } else if (str.length <= n + row - 1) {
                str += '#';
            } else {
                str += ' ';
            }
        }
        console.log(str, str.length);
    }
}

const pyramid = (n, row = 0, str = '') => {
    if (row === n) {
        return;
    }
    if (str.length < n - row - 1) {
        // don't forget to return here either to use else further down in ifs
        return pyramid(n, row, str += ' ');
    }
    if (str.length <= n + row - 1) {
        return pyramid(n, row, str += '#');
    }
    if (str.length < 2 * n - 1) {
        return pyramid(n, row, str += ' ');
    }
    console.log(str, str.length);
    return pyramid(n, row + 1, '');
}

module.exports = pyramid;
