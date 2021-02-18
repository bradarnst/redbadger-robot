const directions = ['S','W','N','E'];

export function computeRobotMoves (robotObj,gridSize) {
    // console.log(robotObj);
    console.log(gridSize);
    let lost = false;
    const startFacing = robotObj.start.direction;
    const startCoord = [robotObj.start.xStart,robotObj.start.yStart];
    let directionNum = (directions.findIndex((element) => element === startFacing));
    let moveDirection = directions[directionNum % 4];
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
                    moveDirection = directionNum % 4;
                    if (moveDirection % 2 == 0) { //North-South or y-axis
                        robotObj.end.y = robotObj.end.y + moveDirection - 1; // either N +1 y-axis or S -1 y-axis
                        if (robotObj.end.y > gridSize[1]) {
                            lost = true;
                            robotObj.end.y = robotObj.end.y - 1;
                        }
                    } else { // East-West or x-axis
                        robotObj.end.x = robotObj.end.x + moveDirection - 2; // either E +1 x-axis or W -1 x-axis
                        if (robotObj.end.x > gridSize[0]) {
                            lost = true;
                            robotObj.end.x = robotObj.end.x - 1;
                        }
                    };
            };
        };
    };
    robotObj.end.direction = directions[directionNum %  4];
    if (lost) {
        console.log('Final position: ', robotObj.end.x, robotObj.end.y, robotObj.end.direction, 'LOST');
    } else {
        console.log('Final position: ', robotObj.end.x, robotObj.end.y, robotObj.end.direction);
    };
    return;
}