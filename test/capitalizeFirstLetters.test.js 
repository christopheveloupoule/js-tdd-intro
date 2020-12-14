const assert = require('assert');
const capitalizeFirstLetters = require('../capitalizeFirstLetters');

describe('capitalizeFirstLetters', () => {
    it('is a function accepting one argument', () => {
        assert.strictEqual(typeof capitalizeFirstLetters, 'function');
        assert.strictEqual(capitalizeFirstLetters.length, 1);
    });
    it('transforms Hello my name is flo correctly', () => {
        assert.strictEqual(capitalizeFirstLetters("Hello my name is Christophe"), "Hello My Name Is Christophe");
    });
    it('works with a one-character string', () => {
        assert.strictEqual(capitalizeFirstLetters('z'), 'Z');
    });
    it('works with an empty string', () => {
        assert.strictEqual(capitalizeFirstLetters(''), '');
    })
})