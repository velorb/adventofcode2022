const getInput = require('../getInput');
const { getCommands, getSortedCargoData } = require('./utility')
const input = getInput('input.txt');

function executeCommands(commands, cargoDataSorted) {
    let cargoDataSortedCopy = JSON.parse(JSON.stringify(cargoDataSorted));
    commands.forEach(({ moveElements, fromStack, toStack }) => {
        for (i = 0; i < moveElements; i++) {
            const elementToMove = cargoDataSortedCopy[fromStack].pop();
            if (elementToMove === undefined) {
                continue;
            }
            cargoDataSortedCopy[toStack].push(elementToMove)
        }
    });

    return cargoDataSortedCopy;
}

const commands = getCommands(input);
const cargoDataSorted = getSortedCargoData(input);
const cargoAfterCommands = executeCommands(commands, cargoDataSorted)
console.log(Object.values(cargoAfterCommands).map(cargo => cargo.pop()).join(''))


