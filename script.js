const sum = (a, b) => {
    return a + b
}

const cap = (string) => {
    let firstLetter = string.charAt(0).toUpperCase()
    string = string.slice(1)
    return firstLetter + string
}

const reverse = (string) => {
    return string.split('').reverse().join('')
}

const calculator = {
    add: (a, b) => a + b,
    subtract: (a, b) => a - b,
    divide: (a, b) => a / b,
    multiply: (a, b) => a * b
}

const caesarCipher = (string, shift) => {
    if (typeof string != 'string') {
        return 'inputText must be string'
    }

    if (shift > 26 || shift < 0) {
        return ("Value must be non-negative and less then or = to 26");
    }

    let alpaLower = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    let alpaUpper = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

    let mixed = ''
    let letter
    let index

    for (let i = 0; i < string.length; i++) {
        let originalLetter = string.charAt(i)

        letter = originalLetter

        alpaLower.forEach((node, i) => {
            if (node === originalLetter) {
                index = i
                letter = alpaLower[(index + shift) % 26]
            }
        })

        alpaUpper.forEach((node, i) => {
            if (node === originalLetter) {
                index = i
                letter = alpaUpper[(index + shift) % 26]
            }
        })

        mixed += letter
    }

    return mixed
}

function analyzeArray(arr) {
    if (!Array.isArray(arr) || arr.length === 0) {
        return ("Input must be a non-empty array of numbers")
    }

    const sum = arr.reduce((acc, num) => acc + num, 0)
    const average = sum / arr.length
    const min = Math.min(...arr)
    const max = Math.max(...arr)
    const length = arr.length;

    return {
        average,
        min,
        max,
        length
    }
}

module.exports = {
    sum,
    cap,
    reverse,
    calculator,
    caesarCipher,
    analyzeArray
}