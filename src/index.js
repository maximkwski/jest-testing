/* A capitalize function that takes a string and returns it with 
the first character capitalized. */
export function capitalize(string) {
    const firstLetter = string.charAt(0);
    return firstLetter.toUpperCase() + string.slice(1);
}

/* A function that takes a string and returns it reversed. */
export function reverseString(string) {
    let result = string.split('').reverse().join('');
    return result
}

export const calculator = {
    add: function (a, b) {
        return a + b
    },
    substract: function (a, b) {
        return a - b
    },
    multiply: function (a, b) {
        return a * b
    },
    devide: function (a, b) {
        return a / b
    }
}


//ceasar cypher function 
function isUpperCase(char) {
    return char >= 'A' && char <= 'Z';
  }
  
function isLowerCase(char) {
return char >= 'a' && char <= 'z';
}

function isAlphabetic(char) {
return isUpperCase(char) || isLowerCase(char);
}

function shiftCharacter(char, shift) {
let charCode = char.charCodeAt(0);

if (isUpperCase(char)) {
    return String.fromCharCode(((charCode - 65 + shift) % 26) + 65);
} else if (isLowerCase(char)) {
    return String.fromCharCode(((charCode - 97 + shift) % 26) + 97);
}

return char;
}

export function caesarCipher(input, shift) {
    return input
        .split('')
        .map(char => (isAlphabetic(char) ? shiftCharacter(char, shift) : char))
        .join('');
}

export function analizeArray(arr) {
    const obj = {}
    obj.average = (arr.reduce((acc, curr) => acc + curr, 0)) / arr.length;
    arr.sort();
    obj.min = arr[0];
    obj.max = arr[arr.length - 1];
    obj.length = arr.length;

    return obj
}