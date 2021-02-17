// const line  = '   10     20 E ';
const whSp = /\s+/; // regex for 1 to many white space characters
const digits = /\d+/; // regex for 1 to many numerical digits
const noDigitsSpaces = /[^\d\s]/; //regex for matching not a digit or whitespace
const noDigitsDirection = /[^\d\sNESW]/; //regex for matching not a digit, whitespace or direction
const noRobotMoves = /[^RLF]/; //regex for matching not a Robot Move (R, L, or F)
const lineEntryError = "Incorrect entry. See README for syntax.";
const gridLimit = 50;

export function gridSize (line) {
    let trimLine = line.trim();
    let notGood = noDigitsSpaces;
    if (notGood.test(trimLine)) {
        try {
            throw new Error("On Grid Size. "+lineEntryError);
        } catch (e) {
            console.error(e.name + ': ' + e.message);
            return; 
        }
    } else {
        const lineArray = trimLine.split(whSp, 2); //remove start/trailing whitespace and all but the first two strings
        let lineList = [];
        for (let val of lineArray) {
            if (digits.test(val)) {
                val = parseInt(val,10);
                if (val > gridLimit) {
                    try {
                        throw new Error("Grid size must be max of "+ gridLimit);
                    } catch (e) {
                        console.error(e.name + ': ' + e.message);
                        return;
                    }
                }
                lineList.push(val);
            } else {
                lineList.push(val);
            }
        }
        let grid = lineList;
        return grid;
    }
}
export function startPos (line,gridSize) {
    let trimLine = line.trim();
    let notGood = noDigitsDirection;
    if ( notGood.test(trimLine)) {
        try {
            throw new Error("On Start Position. "+lineEntryError);
        } catch (e) {
            console.error(e.name + ': ' + e.message);
            return;
        }
    } else {
        const lineArray = trimLine.split(whSp, 3); //remove start/trailing whitespace and all but the first three strings
        let lineList = [];
        for (let val of lineArray) {
            if (digits.test(val)) {
                val = parseInt(val,10);
                lineList.push(val);
            } else {
                lineList.push(val);
            }
        }
        let start = lineList;
        for (let i=0; i<=1; i++) {
            if (start[i] > gridSize[i]) {
                try {
                    throw new Error("Start position outside of size of grid.");
                } catch (e) {
                    console.error(e.name + ': ' + e.message);
                    return;
                }
            }
        }
        return start;
    }
}
export function robotMoves (line) {
    // let trimLine = line.trim();
    let noWhSpLine = line.replace(/\s+/g,''); //remove all whitespace
    let notGood = noRobotMoves;
    if (notGood.test(noWhSpLine)) {
        try {
            throw new Error("On Robot Moves. "+lineEntryError);
        } catch (e) {
            console.error(e.name + ': ' + e.message);
            return;
        }
    } else {
    let lineArray = Array.from(noWhSpLine);
    let moves = lineArray;
    return moves;
}
}


// let trimLine = line.trim();


// const lineArray = trimLine.split(wS, 3);

// let lineList = [];
// for (let val of lineArray) {
//     if (/\d+/.test(val)) {
//         val = parseInt(val,10);
//         lineList.push(val);
//     } else {
//         lineList.push(val);
//     }
// }


// const lineList = lineArray.map(val => parseInt(val,10));

