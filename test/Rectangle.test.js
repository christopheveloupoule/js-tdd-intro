const assert = require("assert");
const Rectangle = require('../Rectangle');

describe('Rectangle', () => {
    it('is an instance of a class and accepts two parameters', () => {
        assert.strictEqual(typeof new Rectangle, 'object');
        assert.strictEqual(Rectangle.length, 2);
    })
    it('returns true if rectangle is a square', () => {
        assert.ok(new Rectangle(4, 4).isSquare());
    });
    it('return false if rectangle is not a square', () => {
        assert.strictEqual(new Rectangle(4, 2).isSquare(), false);
    });
    it('returns 91 as area' , () => {
        assert.strictEqual(new Rectangle(13, 7).getArea(), 91);
    });
    it('returns 40 as perimeter', () => {
        assert.strictEqual(new Rectangle(13, 7).getPerimeter(), 40);
    })
})