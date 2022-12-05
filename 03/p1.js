const getInput = require('../getInput');
const input = getInput('input.txt');

const unique = (value, index, self) => self.indexOf(value) === index;

const convertElementToWeight = (element) => {
    const elementCharCode = element.charCodeAt(0);

    if (elementCharCode >= 'a'.charCodeAt(0)
        && elementCharCode <= 'z'.charCodeAt(0)
    ) {
        return elementCharCode - 96;
    }

    return elementCharCode - 38;
}

const rucksacks = input.split('\n').map(
    rucksack => rucksack.split('')
)

const duplicatedElementsInCompartments = rucksacks.map(rucksack => {
    const middleElementIndex = rucksack.length / 2
    const firstCompartment = rucksack.slice(0, middleElementIndex);
    const secondCompartment = rucksack.slice(-middleElementIndex)

    const duplicatedElementsInCompartments = firstCompartment
        .filter(element => secondCompartment.includes(element))
        .reduce((a, b) => a)

    return duplicatedElementsInCompartments[0];
})
const totalWeight = duplicatedElementsInCompartments
    .filter(unique)
    .map(elementType => convertElementToWeight(elementType))
    .reduce((a, b) => a + b)

console.log(totalWeight);