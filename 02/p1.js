const getInput = require('../getInput');
const input = getInput('input.txt');

const fightMap = {
    'X': {
        'A': 1 + 3,
        'B': 1 + 0,
        'C': 1 + 6
    },
    'Y': {
        'A': 2 + 6,
        'B': 2 + 3,
        'C': 2 + 0
    },
    'Z': {
        'A': 3 + 0,
        'B': 3 + 6,
        'C': 3 + 3
    }
}

const totalNumberOfPoints = input
    .split('\n')
    .filter(el => el !== '')
    .map(fight => {
        return fightMap[fight[2]][fight[0]]
    })
    .reduce((a, b) => a + b);

console.log(totalNumberOfPoints);
