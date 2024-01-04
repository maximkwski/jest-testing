 
import { capitalize, reverseString, calculator, caesarCipher, analizeArray } from '../src/index';

test('first character capitalized', () => {
  expect(capitalize('hello world')).toBe('Hello world');
});

test('returns reversed string', () => {
    expect(reverseString('test')).toBe('tset');
})

test('calculator', () => {
    expect(calculator.add(2,2)).toBe(4);
    expect(calculator.substract(5,2)).toBe(3);
    expect(calculator.devide(6,3)).toBe(2);
    expect(calculator.multiply(3,3)).toBe(9);   
})

test('ceaser cipher', () => {
    expect(caesarCipher('hello world', 3)).toBe('khoor zruog')
    expect(caesarCipher('testing', 2)).toBe('vguvkpi')
})

test('analize array', () => {
    expect(analizeArray([1,2,3,2])).toStrictEqual(
        {average: 2,
        min: 1,
        max: 3,
        length: 4})
})