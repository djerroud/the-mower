'use strict'

let moving = (mower, instructions) => {
    for (let i = 0; i < instructions.length; i++) {
        switch (instructions[i]) {
            case 'L':
            case 'R':
                mower.setDirection(instructions[i]);
                break;
            case 'F':
                mower.move();
                break;
        }
    }
}

module.exports = {
    moving
}