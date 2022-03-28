// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize1(str) {
    const replacer = (match, p1, p2) => {
        return `${p1.toUpperCase()}${p2}`
    };

    const capitalized = str.replace(/(\b\w)(\w*)\b/g, replacer);
    return capitalized;
}

function capitalize2(str) {
    const words = str.split(/\W/g);
    const newWords = words.map(word => {
        return word ? word[0].toUpperCase() + word.slice(1) : '';
    });

    let result = str.slice(0);

    for (let i = 0; i < words.length; i++) {
        result = result.replace(words[i], newWords[i]);
    }

    console.log(result);
    return result;
}

function capitalize(str) {
    const words = str.split(' ');
    const newWords = words.map(word => {
        return word[0].toUpperCase() + word.slice(1);
    });

    const result = newWords.join(' ');
    return result;
}

module.exports = capitalize;
