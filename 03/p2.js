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

const chunkArray = (array, chunkCount) => {
    let chunks = [], i, j;
    for (i = 0, j = array.length; i < j; i += chunkCount) {
        chunks.push(array.slice(i, i + chunkCount))
    }

    return chunks;
}

const rucksacks = input.split('\n').map(
    rucksack => rucksack.split('')
)
const elvesGroups = chunkArray(rucksacks, 3);
const elvesGroupBadges = elvesGroups.map(elvesGroup => {
    const firstElveUniqueElements = elvesGroup[0].filter(unique)

    return firstElveUniqueElements.filter(elementType => {
        return elvesGroup[1].includes(elementType) && elvesGroup[2].includes(elementType)
    })[0]
})

const groupsBadgetTotalWeight = elvesGroupBadges.map(elementType => convertElementToWeight(elementType)).reduce((a, b) => a + b)
console.log(groupsBadgetTotalWeight)