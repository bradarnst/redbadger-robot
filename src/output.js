const directions = ['S','W','N','E'];
// custom modulos to ensure negative integers are correct
Number.prototype.mod = function(n) {
    return ((this % n) + n) % n;
}

export function computeRobotMoves (robotObj,gridSize,badSmells) {
    // console.log(robotObj);
    // console.log(gridSize);
    let robotPosition = '';
    let lost = false;
    const startFacing = robotObj.start.direction;
    const startCoord = [robotObj.start.xStart,robotObj.start.yStart];
    let directionNum = (directions.findIndex((element) => element === startFacing));
    // console.log(directionNum);
    for (let move in robotObj.moves) {
        if (!lost) {
            switch (robotObj.moves[move]) {
                case 'R':
                    directionNum++;
                    break;
                case 'L':
                    directionNum--;
                    break;
                case 'F':
                    directionNum = directionNum.mod(4);
                    if (directionNum % 2 == 0) { //North-South or y-axis
                        robotObj.end.y = robotObj.end.y + directionNum - 1; // either N +1 y-axis or S -1 y-axis
                        robotPosition = robotObj.end.x.toString() + ' ' + robotObj.end.y.toString();
                        if (badSmells.includes(robotPosition)) { // if bad smell then ignore
                            robotObj.end.y = robotObj.end.y - directionNum + 1;
                            break;
                        };
                        if (robotObj.end.y > gridSize[1] || robotObj.end.y < 0) {
                            lost = true;
                            badSmells.push(robotObj.end.x.toString() + ' ' + robotObj.end.y.toString());
                            robotObj.end.y = robotObj.end.y - directionNum + 1;
                            break;
                        }
                    } else { // East-West or x-axis
                        robotObj.end.x = robotObj.end.x + directionNum - 2; // either E +1 x-axis or W -1 x-axis
                        robotPosition = robotObj.end.x.toString() + ' ' + robotObj.end.y.toString();
                        if (badSmells.includes(robotPosition)) { // if bad smell then ignore
                            robotObj.end.x = robotObj.end.x - directionNum + 2;
                            break;
                        };
                        if (robotObj.end.x > gridSize[0] || robotObj.end.x < 0) {
                            lost = true;
                            badSmells.push(robotObj.end.x.toString() + ' ' + robotObj.end.y.toString());
                            robotObj.end.x = robotObj.end.x - directionNum + 2;
                            break;
                        }
                    };
            };
        };
    };
    directionNum = directionNum.mod(4);
    robotObj.end.direction = directions[directionNum];
    // console.log("Direction = "+robotObj.end.direction);
    if (lost) {
        console.log('\nFinal position: ', robotObj.end.x, robotObj.end.y, robotObj.end.direction, 'LOST');
    } else {
        console.log('\nFinal position: ', robotObj.end.x, robotObj.end.y, robotObj.end.direction);
    };
    return robotObj, badSmells;
}