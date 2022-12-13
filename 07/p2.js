const getInput = require('../getInput');
const input = getInput('./input.txt').split('\n');

class File {
    parent = null;
    children = [];

    constructor(name, size = null) {
        this.name = name;
        this.size = size;
    }

    addChild(file) {
        file.parent = this;
        this.children.push(file)
    }

    getParent() {
        return this.parent;
    }

    getChildren() {
        return this.children;
    }

    getChildWithName(name) {
        const child = (this.children ?? []).filter(file => file.name === name);
        return child[0] !== undefined ? child[0] : null;
    }
}

function createRootFile(input) {
    const rootFile = new File('/', null);
    let currentFile = rootFile;

    input.forEach(line => {
        if (line[0] === '$') {
            const commandString = line.substr(2);
            const [command, param] = commandString.split(' ');
    
            if (command === 'cd') {
                if (param == '..') {
                    currentFile = currentFile.getParent();
                } else {
                    const childFile = currentFile.getChildWithName(param);
                    if (param === '/') return;
                    if (childFile !== null) {
                        currentFile = childFile;
                    } else {
                        const newFile = new File(param)
                        currentFile.addChild(newFile);
                        currentFile = newFile;
                    }
                }
            }
        } else {
            const [newFileSize, newFileName] = line.split(' ');
            if (newFileSize === 'dir') {
                return;
            }
            const newFile = new File(newFileName, newFileSize)
            currentFile.addChild(newFile);
        }
    })
    
    return rootFile;
}

const rootFile = createRootFile(input);


let dirs = [];
function getFileSize(file, getDirsBiggerThan = null) {
    if (file.getChildren().length === 0) {
        return file.size;
    } else {
        let size = 0;
        file.getChildren().forEach(child => {
            size += parseInt(getFileSize(child, getDirsBiggerThan));
        })

        if(getDirsBiggerThan !== null && size >= getDirsBiggerThan) {
            dirs.push(size);
        }

        return size;
    }
}
const neededSize =  (getFileSize(rootFile) + 30000000) - 70000000;
getFileSize(rootFile, neededSize)

const smallestDirSize = dirs.sort((a,b) =>  a - b)[0]
console.log(smallestDirSize)