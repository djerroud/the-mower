'use strict'

const Mower = require('../app/Mower');
const helper = require('../app/helper');

const chai = require('chai'),
    assert = chai.assert,
    expect = chai.expect;


describe('Units Tests', function () {
    let mower = new Mower({
        x: 6,
        y: 6
    }, {
        x: 3,
        y: 2
    }, 'E');
    describe('Initialization', function () {
        it('should set lawn.x and lawn.y', function () {
            expect({
                x: mower.lawn.x,
                y: mower.lawn.y
            }).to.eql({
                x: 6,
                y: 6
            });
        });

        it('should set coordinates.x and coordinates.y', function () {
            expect({
                x: mower.coordinates.x,
                y: mower.coordinates.y
            }).to.eql({
                x: 3,
                y: 2
            });
        });

        it('should set direction', function () {
            assert.equal(mower.direction, 'E');
        });
    });

    describe('Moving', function () {
        it('should change direction to left', function () {
            mower.setDirection('L');
            assert.equal(mower.direction, 'N')
        });

        it('should change direction to right', function () {
            mower.setDirection('R');
            assert.equal(mower.direction, 'E')
        });

        it('should move to south', function () {
            helper.moving(mower, 'RF')
            assert.equal(mower.direction, 'S')
            assert.equal(mower.coordinates.y, 1)
        });

        it('should move to east', function () {
            helper.moving(mower, 'LF')
            assert.equal(mower.direction, 'E')
            assert.equal(mower.coordinates.x, 4)
        });

        it('should move to north', function () {
            helper.moving(mower, 'LF')
            assert.equal(mower.direction, 'N')
            assert.equal(mower.coordinates.y, 2)
        });

        it('should move to west', function () {
            helper.moving(mower, 'LF')
            assert.equal(mower.direction, 'W')
            assert.equal(mower.coordinates.x, 3)
        });
    });
});