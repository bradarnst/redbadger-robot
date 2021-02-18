const directions = ['S','W','N','E'];

export function computeRobotMoves (robotObj) {
    // console.log(robotObj);
    const startFacing = robotObj.start.direction;
    const startCoord = [robotObj.start.xStart,robotObj.start.yStart];
    let directionNum = (directions.findIndex((element) => element === startFacing));
    let moveDirection = directions[directionNum % 4];
    for (let move in robotObj.moves) {
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
                } else { // East-West or x-axis
                    robotObj.end.x = robotObj.end.x + moveDirection - 2; // either E +1 x-axis or W -1 x-axis
                };
        };
        robotObj.end.direction = directions[directionNum %  4];
    }
    console.log('Final position: ', robotObj.end.x, robotObj.end.y, robotObj.end.direction);
    return;
}