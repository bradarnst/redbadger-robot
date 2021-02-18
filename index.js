// import readline from 'readline';
import * as parse from './src/parse-lines.js';
// const parse = require('./src/parse-lines');

const line  = '   10 30';
const line2 = '   4 5 W ';
const line3 = 'FFFF RRLFLFRL      ';

let gridSize = parse.gridSize(line);
if (gridSize === 'Error') {
    process.exit();
}

let startPos = parse.startPos(line2,gridSize);

let robotMoves = parse.robotMoves(line3);

console.log(gridSize);
console.log(startPos);
console.log(robotMoves);