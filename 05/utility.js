function getCommands(input) {
    var commands = [];
    var commandsSource = input.split('\n').slice(10);
    var commandArgumentsRegex = /\d+/gm;
    commandsSource.forEach(function (commandSource) {
        var matches = [];
        var match = commandArgumentsRegex.exec(commandSource);
        while (match != null) {
            matches.push(match[0]);
            match = commandArgumentsRegex.exec(commandSource);
        }
        commands.push({ moveElements: matches[0], fromStack: matches[1], toStack: matches[2] });
    });
    return commands;
}

function getSortedCargoData(input) {
    const cargoSorted = {};
    const cargo = input.split('\n').slice(0, 8);
    const cargoStacks = input.split('\n')[8];
    for (let i = 0; i < cargoStacks.length; i++) {
        if (cargoStacks[i] !== ' ') {
            const stackNumber = cargoStacks[i];
            for (let j = cargo.length - 1; j >= 0; j--) {
                if (cargoSorted[stackNumber] === undefined) {
                    cargoSorted[stackNumber] = [];
                }
                if (cargo[j][i] !== ' ') {
                    cargoSorted[stackNumber].push(cargo[j][i]);
                }
            }
        }
    }
    return cargoSorted;
}

module.exports = {
    getCommands,
    getSortedCargoData
};
