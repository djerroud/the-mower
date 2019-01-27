'use_strict'

const ALL_DIRECTION = ['W', 'N', 'E', 'S'];

class Mower {

    constructor(lawn, coordinates, direction) {
        this.lawn = lawn;
        this.coordinates = coordinates;
        this.direction = direction;
    }

    getPosition() {
        return `x: ${this.coordinates.x}, y: ${this.coordinates.y}`;
    }

    getDirection() {
        return `Direction : ${this.direction}`;
    }

    setDirection(orientation) {
        let i = ALL_DIRECTION.indexOf(this.direction);
        if (orientation === 'L')
            this.direction = i === 0 ? ALL_DIRECTION[ALL_DIRECTION.length - 1] : ALL_DIRECTION[i - 1];
        else if (orientation === 'R')
            this.direction = i === ALL_DIRECTION.length - 1 ? ALL_DIRECTION[0] : ALL_DIRECTION[i + 1];
    }

    chackingMove(new_coordinates) {
        return this.coordinates.x >= 0 &&
            this.coordinates.y >= 0 &&
            this.lawn.x >= new_coordinates.x &&
            this.lawn.y >= new_coordinates.y
    }

    move() {
        switch (this.direction) {
            case 'W':
                if (this.chackingMove({
                        x: this.coordinates.x - 1,
                        y: this.coordinates.y
                    }))
                    this.coordinates.x += -1;
                break;
            case 'N':
                if (this.chackingMove({
                        x: this.coordinates.x,
                        y: this.coordinates.y + 1
                    }))
                    this.coordinates.y += 1;
                break;
            case 'E':
                if (this.chackingMove({
                        x: this.coordinates.x + 1,
                        y: this.coordinates.y
                    }))
                    this.coordinates.x += 1;
                break;
            case 'S':
                if (this.chackingMove({
                        x: this.coordinates.x,
                        y: this.coordinates.y - 1
                    }))
                    this.coordinates.y += -1;
                break;
        }
    }
}

module.exports = Mower;