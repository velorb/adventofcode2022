const getInput = require('../getInput');
const input = getInput('./input.txt').split('');

function findHowManyCharactersNeedBeProcessedToFindMarker(input) {
    for (let i = 0; i < input.length; i++) {
        const arrayToCheck = input.slice(i, i + 4);
        if ((new Set(arrayToCheck)).size === 4) {
            return i + 4;
        }
    }
}

console.log(findHowManyCharactersNeedBeProcessedToFindMarker(input));