const getInput = require('../getInput');
const input = getInput('./input.txt').split('');

function findHowManyCharactersNeedBeProcessedToFindMessageMarker(input) {
    let startPacketSent = false;
    for (let i = 0; i < input.length; i++) {
        if (startPacketSent) {
            const arrayToCheck = input.slice(i, i + 14);
            if ((new Set(arrayToCheck)).size === 14) {
                return i + 14;
            }
        }

        const arrayToCheck = input.slice(i, i + 4);
        if ((new Set(arrayToCheck)).size === 4) {
            startPacketSent = true;
        }
    }
}

console.log(findHowManyCharactersNeedBeProcessedToFindMessageMarker(input))
