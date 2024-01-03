const capitalize = require('./index');
const reverseString = require('./index');

// test('first character capitalized', () => {
//   expect(capitalize('hello world')).toBe('Hello world');
// });

test('returns reversed string', () => {
    expect(reverseString('test')).toBe('tset');
})