const fs = require('fs');

const getInput = (filePath) => {
	return fs
		.readFileSync(filePath)
		.toString()
}

module.exports = getInput;