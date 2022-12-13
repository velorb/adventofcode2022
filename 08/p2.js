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

function getViewScore(row, column) {
    if (isElementPlacedOnBorder(row, column)) {
        return 0;
    }

    return getLeftViewNumber(row,column) * getRightViewNumber(row, column) * getTopViewNumber(row,column) * getBottomViewNumber(row, column);
}

function getLeftViewNumber(row, column) {
    let viewNumber = 0;
    for (let i = column - 1; i >= 0; i--) {
        viewNumber++;
        if (input[row][column] <= input[row][i]) {
            return viewNumber;
        }
    }

    return viewNumber;
}

function getRightViewNumber(row, column) {
    let viewNumber = 0;

    for (let i = column + 1; i <= input[row].length - 1; i++) {
        viewNumber++;
        if (input[row][column] <= input[row][i]) {
            return viewNumber;
        }
    }

    return viewNumber;
}

function getTopViewNumber(row, column) {
    let viewNumber = 0;

    for (let i = row - 1; i >= 0; i--) {
        viewNumber++;
        if (input[row][column] <= input[i][column]) {
            return viewNumber;
        }
    }

    return viewNumber;
}

function getBottomViewNumber(row, column) {
    let viewNumber = 0;
    for (let i = row + 1; i <= input.length - 1; i++) {
        viewNumber++;
        if (input[row][column] <= input[i][column]) {
            return viewNumber;
        }
    }

    return viewNumber;
}

let maxViewScore = 0;
for (let i = 0; i < input.length; i++) {
    const line = input[i];
    for (let j = 0; j < line.length; j++) {
        let row = i;
        let column = j;
        const viewScore = getViewScore(row, column);
        if(viewScore > maxViewScore) {
            maxViewScore = viewScore;
        }
    }
}

console.log(maxViewScore);