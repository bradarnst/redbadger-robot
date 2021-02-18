import rlSync from 'readline-sync';
// import readline from 'readline';
import * as parse from './src/parse-lines.js';

// const line  = '   10 30';
// const line2 = '   4 5 W ';
// const line3 = 'FFFF RRLFLFRL      ';


let line = rlSync.question('Grid Size: ');
let gridSize = parse.gridSize(line);
if (gridSize === 'Error') {
    process.exit(0);
};

let line2 = rlSync.question('Start Position: ');
let startPos = parse.startPos(line2,gridSize);
if (startPos === 'Error') {
    process.exit(0);
};
let startPosObj = {
    "xStart": startPos[0],
    "yStart": startPos[1],
    "direction": startPos[2]
};

let line3 = rlSync.question('Enter Robot Moves: ');
let robotMoves = parse.robotMoves(line3);
if (robotMoves === 'Error') {
    process.exit(0);
};
let robotObj = {
    "start": startPosObj,
    "moves": robotMoves,
    "end": {}
};

console.log(gridSize);
console.log(startPos);
console.log(startPosObj);
console.log(robotMoves);
console.log(robotObj);