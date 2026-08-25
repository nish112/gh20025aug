const sum = require('../src/math');

test('adds 2 + 2 to equal 4', () => {
    expect(sum(2, 2)).toBe(4);
});

test('adds -2 + -1 to equal -3', () => {
    expect(sum(-2, -1)).toBe(-3);
});
