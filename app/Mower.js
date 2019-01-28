'use_strict'

const ALL_DIRECTION = ['W', 'N', 'E', 'S'];
const ORIENTATION = {
    left: 'L',
    right: 'R'
};
class Mower {

    constructor(lawn, coordinates, direction) {
        this.lawn = lawn;
        this.coordinates = coordinates;
        this.direction = direction;
    }

    /**
     * Get the last position 
     * @return {String}
     */
    getPosition() {
        return `x: ${this.coordinates.x}, y: ${this.coordinates.y}`;
    }

    /**
     * Get the last direction
     * @return {String}
     */
    getDirection() {
        return `Direction : ${this.direction}`;
    }

    /**
     * Change the direction according to the orientation param
     * @param {String} orientation -> orientation (L or R)
     */
    setDirection(orientation) {
        let i = ALL_DIRECTION.indexOf(this.direction);
        if (orientation === ORIENTATION.left)
            this.direction = i === 0 ? ALL_DIRECTION[ALL_DIRECTION.length - 1] : ALL_DIRECTION[i - 1];
        else if (orientation === ORIENTATION.right)
            this.direction = i === ALL_DIRECTION.length - 1 ? ALL_DIRECTION[0] : ALL_DIRECTION[i + 1];
    }

    /**
     * Check if the mower can move
     * @param {Object} new_coordinates -> object with new mower's coordinates
     * @return {Boolean}
     */
    chackingMove(new_coordinates) {
        return this.coordinates.x >= 0 &&
            this.coordinates.y >= 0 &&
            this.lawn.x >= new_coordinates.x &&
            this.lawn.y >= new_coordinates.y
    }

    /**
     * Move the mower according to the direction
     */
    move() {
        switch (this.direction) {
            case ALL_DIRECTION[0]:
                if (this.chackingMove({
                        x: this.coordinates.x - 1,
                        y: this.coordinates.y
                    }))
                    this.coordinates.x += -1;
                break;
            case ALL_DIRECTION[1]:
                if (this.chackingMove({
                        x: this.coordinates.x,
                        y: this.coordinates.y + 1
                    }))
                    this.coordinates.y += 1;
                break;
            case ALL_DIRECTION[2]:
                if (this.chackingMove({
                        x: this.coordinates.x + 1,
                        y: this.coordinates.y
                    }))
                    this.coordinates.x += 1;
                break;
            case ALL_DIRECTION[3]:
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