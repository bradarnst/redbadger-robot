import * as parse from '../src/parse-lines.js';
// const parse = require(../src/parse-lines);

test('gridSize returns correct array.', () => {
    const line = '  10     20     ';
    const correctArray = [10,20];
    expect(parse.gridSize(line)).toEqual(correctArray);
});

test('startPos returns correct array.', () => {
    const line = '  5    20  E   ';
    const gSize = [20,30];
    const correctArray = [5,20,'E'];
    expect(parse.startPos(line,gSize)).toEqual(correctArray);
});

test('robotMoves returns correct array.', () => {
    const line = '  FF     RLFL      ';
    const correctArray = ['F','F','R','L','F','L'];
    expect(parse.robotMoves(line)).toEqual(correctArray);
});
