const getInput = require('../getInput');
const input = getInput('input.txt').split('\n').map(line => line.split('')).map(el => el.map(el => parseInt(el)));

function isElementPlacedOnBorder(row, column) {
    if (column === 0 || row === 0 || row === input.length - 1) {
        return true;
    }

    if (column === input[row].length - 1) {
        return true;
    }

    return false;
}

function isVisibleLeft(row, column) {
    for (let i = column - 1; i >= 0; i--) {
        if (input[row][column] <= input[row][i]) {
            return false;
        }
    }

    return true;
}

function isVisibleRight(row, column) {
    for (let i = column + 1; i <= input[row].length - 1; i++) {
        if (input[row][column] <= input[row][i]) {
            return false;
        }
    }

    return true;
}

function isVisibleTop(row, column) {
    for (let i = row - 1; i >= 0; i--) {
        if (input[row][column] <= input[i][column]) {
            return false;
        }
    }

    return true;
}

function isVisibleBottom(row, column) {
    for (let i = row + 1; i <= input.length - 1; i++) {
        if (input[row][column] <= input[i][column]) {
            return false;
        }
    }

    return true;
}


let counter = 0;
for (let i = 0; i < input.length; i++) {
    const line = input[i];
    for (let j = 0; j < line.length; j++) {
        let row = i;
        let column = j;
        if (isElementPlacedOnBorder(row, column)
            || isVisibleLeft(row, column)
            || isVisibleRight(row, column)
            || isVisibleTop(row, column)
            || isVisibleBottom(row, column)
        ) {
            counter++;
        }
    }
}

console.log(counter)
