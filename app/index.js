'use_strict'

const fs = require('fs');
let Mower = require('./Mower');
let helper = require('./helper');

const content = fs.readFileSync('../test/test', 'utf8').split("\n");
const lawn = content[0].split(' ');
let position;
let i = 1;

while (i < content.length) {
    position = content[i].split(' ');
    let mower = new Mower({
            x: parseInt(lawn[0]),
            y: parseInt(lawn[1])
        }, {
            x: parseInt(position[0]),
            y: parseInt(position[1])
        },
        position[2]);
    helper.moving(mower, content[i + 1]);
    console.log(`Result : ${mower.getPosition()} ${mower.getDirection()}`);
    i += 2;
}