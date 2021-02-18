import rlSync from 'readline-sync';
import * as parse from './src/parse-lines.js';
import * as output from './src/output.js';

console.log("Red Badger Martin Robot Tracker\nEnter grid size (x and 7 axis) start position (x and y) with direction\nand robot movements R, L, or F. See README for details.\n");

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
let endPosObj = {
    "x": startPosObj.xStart,
    "y": startPosObj.yStart,
    "direction": startPosObj.direction
};

let robotObj = {
    "start": startPosObj,
    "moves": robotMoves,
    "end": endPosObj
};
// console.log(robotObj);
output.computeRobotMoves(robotObj,gridSize);