const getInput = require('../getInput');
const input = getInput('input.txt');

const fightMap = {
    'X': {
        'A': 0 + 3,
        'B': 0 + 1,
        'C': 0 + 2
    },
    'Y': {
        'A': 3 + 1,
        'B': 3 + 2,
        'C': 3 + 3
    },
    'Z': {
        'A': 6 + 2,
        'B': 6 + 3,
        'C': 6 + 1
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
