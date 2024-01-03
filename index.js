function capitalize(string) {
    const firstLetter = string.charAt(0);
    return firstLetter.toUpperCase() + string.slice(1);
}

function reverseString(string) {
    let result = string.split('').reverse().join('');
    return result
}

module.exports = capitalize;
module.exports = reverseString;