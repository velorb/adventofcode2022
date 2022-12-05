const getInput = require('../getInput');
const input = getInput('input.txt')


const elvesSortedTotalCalories = input
    .split('\n\n')
    .map((elf) => {
        return elf
            .split('\n')
            .map(calories => parseInt(calories))
            .reduce((a, b) => a + b)
    })
    .sort((a, b) => b - a)

console.log(`Elf with most calories has: ${elvesSortedTotalCalories[0]}`);

const firstThreeElvesCaloriesSum = elvesSortedTotalCalories
    .slice(0, 3)
    .reduce((a, b) => a + b)

console.log(`First three elves with mosts calories have: ${elvesSortedTotalCalories[0]}`);
