const getInput = require('../getInput');
const input = getInput('input.txt');

const pairs = input.split('\n')
    .map(element => element.split(','))
    .map(el => {
        return el.map(el => {
            return el.split('-').map(el => parseInt(el))
        })
    })

const pairsWithOneOverlappingOther = pairs.filter(value => {
    const firstStart = value[0][0];
    const firstEnd = value[0][1];

    const secondStart = value[1][0];
    const secondEnd = value[1][1]

    return !(secondEnd < firstStart || secondStart > firstEnd);
})

console.log(pairsWithOneOverlappingOther.length);

