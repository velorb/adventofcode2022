const getInput = require('../getInput');
const { getSortedCargoData, getCommands } = require('./utility');
const input = getInput('input.txt');

function executeCommands(commands, cargoDataSorted) {
    let cargoDataSortedCopy = JSON.parse(JSON.stringify(cargoDataSorted));
    commands.forEach(({ moveElements, fromStack, toStack }) => {
        const fromStackLength = cargoDataSortedCopy[fromStack].length - 1;
        for (i = moveElements - 1; i >= 0; i--) {
            const elementToMove = cargoDataSortedCopy[fromStack][fromStackLength - i];
            if (elementToMove === undefined) {
                continue;
            }
            cargoDataSortedCopy[toStack].push(elementToMove)
        }
        cargoDataSortedCopy[fromStack].splice(-moveElements)
    });

    return cargoDataSortedCopy;
}

const commands = getCommands(input);
const cargoDataSorted = getSortedCargoData(input);

const finalCargoData = executeCommands(commands, cargoDataSorted);
console.log(Object.values(finalCargoData).map(cargo => cargo.pop()).join(''))


