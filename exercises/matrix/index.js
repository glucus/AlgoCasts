// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]
function matrix(n) {

    // create empty array and fill it with new empty arrays
    let result = new Array(n);

    for (let i = 0; i < n; i++) {
        result[i] = new Array(n);
    }

    const fillMatrixIterative = (n, matrix) => {
        let value = 1;
        let columnStart = 0;
        let columnEnd = n - 1;

        let rowStart = 0;
        let rowEnd = n - 1;
        let times = 0;

        while (value <= n * n) {
            if (times % 4 === 0) {
                console.log('case 0');
                for (let columnIndex = columnStart; columnIndex <= columnEnd; columnIndex++) {
                    matrix[rowStart][columnIndex] = value;
                    value++;
                }
                rowStart++;
                times++;
            }
            else if (times % 4 === 1) {
                console.log('case 1');
                for (let rowIndex = rowStart; rowIndex <= rowEnd; rowIndex++) {
                    matrix[rowIndex][columnEnd] = value;
                    value++;
                }
                columnEnd--;
                times++;
            }
            else if (times % 4 === 2) {
                console.log('case 2');
                for (let columnIndex = columnEnd; columnIndex >= columnStart; columnIndex--) {
                    matrix[rowEnd][columnIndex] = value;
                    value++;
                }
                rowEnd--;
                times++;
            }
            else if (times % 4 === 3) {
                console.log('case 3');

                for (let rowIndex = rowEnd; rowIndex >= rowStart; rowIndex--) {
                    matrix[rowIndex][columnStart] = value;
                    value++;
                }
                columnStart++;
                times++;
            }
        }

    }

    console.log('start iterative function');
    fillMatrixIterative(n, result);

    // console.log the result
    for (let element of result) {
        console.log(element);
    }

    return result;
}

module.exports = matrix;
